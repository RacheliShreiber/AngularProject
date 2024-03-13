using Microsoft.AspNetCore.Mvc;
using serverProject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private static List<Category> categories = new List<Category> {
                new Category { id = 1, name = "Programming", icon = "code" },
                new Category { id = 2, name = "Design", icon = "paint-brush" },
                new Category { id = 3, name = "Business", icon = "briefcase" },
                new Category { id = 4, name = "Language", icon = "language" },
                new Category { id = 5, name = "Health", icon = "heart" }
        };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
