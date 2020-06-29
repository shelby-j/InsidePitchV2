using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InsidePitchV2.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InsidePitchV2.APIControllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _DbContext;
        public ProductController(ApplicationDbContext dbcontext) {
            _DbContext = dbcontext;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _DbContext.Products.ToList();
        }


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut]
        public void Put([FromBody] CreateProductViewModel viewModel)
        {
            _DbContext.Products.Add(new Product {Name = viewModel.Name, Price = viewModel.Price });
            _DbContext.SaveChanges();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            
        }
    }
}
public class CreateProductViewModel { 
    public string Name { get; set; }
    public float Price { get; set; }
}