using evil_amazon.contracts;
using evil_amazon.dtos.Requests;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController:ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        public ProductsController(IRepositoryWrapper repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var products = _repository.Products.GetAll();
                return Ok(products);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var product = _repository.Products.GetById(id);
                if (product == null)
                {
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
        public IActionResult Insert([FromBody] ProductUpsertDto request)
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
                _repository.Save();

                return Created("Product created", product);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut]
        public IActionResult Update(int id, [FromBody]ProductUpsertDto request)
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

                return Ok(product);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
