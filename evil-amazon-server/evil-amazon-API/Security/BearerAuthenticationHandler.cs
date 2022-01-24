﻿using evil_amazon.contracts;
using evil_amazon.repository.Helpers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace evil_amazon_server.Security
{
    public class BearerAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly IRepositoryWrapper _repository;
        private readonly ILogger _logger;
        public BearerAuthenticationHandler(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock, IRepositoryWrapper repository) : base(options, logger, encoder, clock)
        {
            _repository = repository;
            _logger = logger.CreateLogger("Auth");
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var jwt = Request.Cookies["EvilCookie"];

            if (jwt == null)
            {
                _logger.LogWarning("No auth token");
                return AuthenticateResult.Fail("No token");

            }
            try
            {
                var token = _repository.JWTService.Verify(jwt);
                var userId = int.Parse(token.Issuer);

                var user = _repository.Users.GetById(userId);

                var claims = JwtService.CreateClaims(user);
                var identity = new ClaimsIdentity(claims, Scheme.Name);
                var principal = new ClaimsPrincipal(identity);
                var ticket = new AuthenticationTicket(principal, Scheme.Name);

                return AuthenticateResult.Success(ticket);

            }
            catch
            {
                _logger.LogError("Unauthorized!");
                Response.Cookies.Delete("EvilCookie");
                return AuthenticateResult.Fail("Invalid token");
            }
                     
        }

    }
}
