namespace serverProject.Models
{
    public class User
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string? address { get; set; }
        public string? email { get; set; }
        public string password { get; set; }
        public User()
        {
            
        }
        public User(int id, string name,string address, string mail, string password)
        {
            this.id = id;
            this.name = name;
            this.address=address;
            this.email = mail;
            this.password = password;
        }

    }
}
