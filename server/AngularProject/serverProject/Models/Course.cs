namespace serverProject.Models
{
    public enum Study
    {
        Online,
        Offline,
        Hybrid
    }
    public class Course
    {
        public int id { get; set; }
        public string? lecturer { get; set; }
        public string? name { get; set; }
        public int? category { get; set; }
        public int? countOfLessons { get; set; }
        public DateTime? start { get; set; }
        public List<string>? syllabus { get; set; }
        public Study? study { get; set; }
        public string? image { get; set; }

        public Course(int id, string? lecturer, string? name, int? category, int? countOfLessons, DateTime? start, List<string>? syllabus, Study? study, string? image)
        {
            this.id = id;
            this.lecturer = lecturer;
            this.name = name;
            this.category = category;
            this.countOfLessons = countOfLessons;
            this.start = start;
            this.syllabus = syllabus;
            this.study = study;
            this.image = image;
        }
    }
}
