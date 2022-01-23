using evil_amazon.contracts;
using evil_amazon.dtos.Requests;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
            catch
            {
                return StatusCode(500, "Internal server error");
            }

        }

    }
}
