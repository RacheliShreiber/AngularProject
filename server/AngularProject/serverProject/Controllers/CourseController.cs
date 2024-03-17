using Microsoft.AspNetCore.Mvc;
using serverProject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverProject.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

        
        private static List<Course> courses = new List<Course>  {
                new Course(1, "1", "Introduction to Programming", 1, 12, new DateTime(2024, 3, 19), new List<string> {"Basic concepts", "Data types", "Control structures"}, Study.Frontal, "../../assets/picture.JPG"),
                new Course(2, "2", "Artificial Intelligence Fundamentals", 2, 10, new DateTime(2024, 4, 10), new List<string> {"Machine learning", "Neural networks", "Deep learning"}, Study.Frontal, "../../assets/picture.JPG"),
                new Course(3, "3", "Financial Management",3, 8, new DateTime(2024, 4, 25), new List<string> {"Budgeting", "Investment analysis", "Risk management"}, Study.Zoom, "../../assets/picture.JPG"),
                new Course(4, "4", "Introduction to Psychology", 4, 15, new DateTime(2024, 5, 5), new List<string> {"Behavioral psychology", "Cognitive psychology", "Developmental psychology"}, Study.Zoom, "../../assets/picture.JPG"),
                new Course(5, "5", "Graphic Design Basics", 5, 6, new DateTime(2024, 5, 20), new List<string> {"Color theory", "Typography", "Layout design"}, Study.Frontal, "../../assets/picture.JPG")
            };
        private static int counter = 5;
        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            return courses.Find(c=>c.id==id);
        }

        // POST api/<CourseController>
        [HttpPost]
        public Course Post([FromBody] Course value)
        {
            value.id = ++counter;
            courses.Add(value);
            return value;
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public Course Put(int id, [FromBody] Course value)
        {
            var c = courses.Find(c => c.id == id);
            if (c is null)
            {
                c.id = ++counter;
                courses.Add(c);
            }
            else
            {
                c.lecturer = value.lecturer;
                c.start = value.start;
                c.countOfLessons = value.countOfLessons;
                c.category = value.category;
                c.image = value.image;
                c.study = value.study;
                c.syllabus = value.syllabus;
            }
            return c;
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var c= courses.Find(c => c.id == id);
            courses.Remove(c);
        }
    }
}
