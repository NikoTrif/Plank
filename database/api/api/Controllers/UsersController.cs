using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //GET
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = $@"SELECT * from dbo.Users WHERE ID = {id}";
            if(id == -132465)
            {
                query = @"SELECT * from dbo.Users";
            }

            DataTable table = new DataTable();
            string dataSource = _configuration.GetConnectionString("PlankAppCon");

            SqlDataReader reader;
            using(SqlConnection connection = new SqlConnection(dataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }

            return new JsonResult(table);
        }
        
        //POST
        [HttpPost]
        public JsonResult Post(Users usr)
        {
            string query = 
                @"INSERT INTO dbo.Users
                  VALUES (@email, @UserPassword)";

            DataTable table = new DataTable();
            string dataSource = _configuration.GetConnectionString("PlankAppCon");

            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(dataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@email", usr.email);
                    command.Parameters.AddWithValue("@UserPassword", usr.UserPassword);
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }

            return new JsonResult("Added Succesfully");
        }
        
        //PUT
        [HttpPut("{id}")]
        public JsonResult Put(Users usr, int id)
        {
            string query = 
                @"UPDATE dbo.Users
                  SET email = @email,
                      UserPassword = @UserPassword
                  WHERE ID = @ID";

            DataTable table = new DataTable();
            string dataSource = _configuration.GetConnectionString("PlankAppCon");

            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(dataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ID", id);
                    command.Parameters.AddWithValue("@email", usr.email);
                    command.Parameters.AddWithValue("@UserPassword", usr.UserPassword);
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }

            return new JsonResult("Updated Succesfully");
        }

        //DELETE
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = 
                @"DELETE FROM dbo.Users
                  WHERE ID = @ID";

            DataTable table = new DataTable();
            string dataSource = _configuration.GetConnectionString("PlankAppCon");

            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(dataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ID", id);
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }

            return new JsonResult("Deleted Succesfully");
        }
    }
}
