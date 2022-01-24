using evil_amazon.contracts;
using evil_amazon.dtos.Requests;
using Microsoft.AspNetCore.Authorization;
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
    public class AuthController : ControllerBase
    {
        private readonly IRepositoryWrapper _repository;

        public AuthController(IRepositoryWrapper repository)
        {
            _repository = repository;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            try
            {
                if (request == null)
                {
                    return BadRequest("Wrong username or password");
                }

                var response = _repository.Users.Login(request.Email, request.Password);

                if (response == null)
                {
                    return BadRequest("Wrong username or password");
                }

                // Generate JWT token
                var token = _repository.JWTService.Sign(response);
                Response.Cookies.Append("EvilCookie", token, new CookieOptions()
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.None,
                    
                });

                return Ok(response);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }

        }

        [HttpPost("register")]
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

                return RedirectToAction("Login", new LoginRequest() { Email=request.Email, Password=request.Password});
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }

        }

        [HttpGet("logout")]
        [Authorize]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("EvilCookie");
            return Ok();
        }

        [HttpGet("user")]
        [Authorize]
        public IActionResult GetUser()
        {
            try
            {
                var jwt = Request.Cookies["EvilCookie"];
                var token = _repository.JWTService.Verify(jwt);
                int userId = int.Parse(token.Issuer);

                var user = _repository.Users.GetById(userId);

                return Ok(user);
            }
            catch
            {
                return Unauthorized("You are not logged in");
            }

        }
    }
}
