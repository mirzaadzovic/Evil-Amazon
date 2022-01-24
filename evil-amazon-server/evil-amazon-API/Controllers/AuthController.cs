using evil_amazon.contracts;
using evil_amazon.dtos.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController:ControllerBase
    {
        private readonly IRepositoryWrapper _repository;

        public AuthController(IRepositoryWrapper repository)
        {
            _repository = repository;
        }
       
        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            try
            {
                if (request == null)
                {
                    return BadRequest("Wrong username or password");
                }

                var response = _repository.Users.Login(request.Email, request.Password);
                var token = _repository.JWTService.Sign(response);
                Response.Cookies.Append("EvilCookie", token, new CookieOptions()
                {
                    HttpOnly = true,
                    Expires = DateTimeOffset.Now.AddHours(1)
                }); 

                if (response == null)
                {
                    return BadRequest("Wrong username or password");
                }

                return Ok(response);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
         
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] UserUpsertDto request)
        {
            try
            {
                if (request == null)
                {
                    return BadRequest("Wrong email or password");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Wrong input format");
                }

                var user = _repository.Users.Insert(request);

                if (user == null)
                {
                    return BadRequest("Wrong email or password");
                }

                await _repository.Save();

                return Created("User registered", user);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }

        }

    }
}
