using Microsoft.AspNetCore.Mvc;
using serverProject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User { id = 1, name = "John Doe",      email = "john@example.com", password = "password1" },
            new User { id = 2, name = "Jane Smith",    email = "jane@example.com", password = "password2" },
            new User { id = 3, name = "Alice Johnson", email = "alice@example.com",password = "password3" }
        };
        private static int counter = 3;
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return users.Find(u => u.id == id);
        }

        // POST api/<UserController>
        [HttpPost]
        public User Post([FromBody] User value)
        {
            value.id = ++counter;
            users.Add(value);
            return value;
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var u = users.Find(u => u.id == id);
            if (u is null)
            {
                u.id = ++counter;
                users.Add(u);
            }
            else
            {
                u.name = value.name;
                u.address = value.address;
                u.email = value.email;
                u.password = value.password;
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var u = users.Find(u => u.id == id);
            users.Remove(u);
        }
    }
}
