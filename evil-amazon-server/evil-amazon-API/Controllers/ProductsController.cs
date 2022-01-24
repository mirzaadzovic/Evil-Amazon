using evil_amazon.contracts;
using evil_amazon.dtos.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ProductsController:ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        private readonly ILogger _logger;
        public ProductsController(IRepositoryWrapper repository, ILoggerFactory loggerFactory)
        {
            _repository = repository;
            _logger=loggerFactory.CreateLogger("products");
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll([FromQuery] string name=null)
        {
            try
            {
                // get all products if name query is null, filters by name if it's not
                var products = name==null?
                    _repository.Products.GetAll():
                    await _repository.Products.GetByName(name);

                _logger.LogInformation("Status code: 200, Products fetched");
                return Ok(products);
            }
            catch
            {
                _logger.LogError("Status code: 500, Internal server error");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public IActionResult GetById(int id)
        {
            try
            {
                var product = _repository.Products.GetById(id);
                if (product == null)
                {
                    _logger.LogError("Status code: 404, Product not found");
                    return NotFound();
                }
                return Ok(product);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] ProductUpsertDto request)
        {
            try
            {
                if (request == null)
                {
                    return BadRequest("Request body is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid data format");
                }

                var product = _repository.Products.Insert(request);
                await _repository.Save();

                return Created("Product created", product);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(int id, [FromBody]ProductUpsertDto request)
        {
            try
            {
                if (request == null)
                {
                    return BadRequest("Empty body string");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid data format");
                }

                var product = _repository.Products.Update(id, request);
                await _repository.Save();

                return Ok(product);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
