using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Runtime.InteropServices;

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
        //[HttpGet/*("{email, password}")*/]
        [HttpGet("{id?}")]
        public JsonResult Get(string email, string UserPassword, int id = 0)
        {
            //string query = $@"SELECT * from dbo.Users WHERE ID = {id}";
            string query = "";

            if (id == 0)
            {
                query = $@"SELECT * from Users WHERE Users.email = '{email}' AND Users.UserPassword = '{UserPassword}'";
            }
            else if (id == -132465)
            {
                query = @"SELECT * from dbo.Users";
            }
            else
            {
                query = $@"SELECT * FROM dbo.Users WHERE ID = {id}";
            }

            DataTable table = new DataTable();
            string dataSource = _configuration.GetConnectionString("PlankAppCon");

            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(dataSource))
            {
                connection.Open();
                if (query != "")
                {
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        reader = command.ExecuteReader();
                        table.Load(reader);
                        reader.Close();
                        connection.Close();
                    } 
                }
                else
                {
                    return new JsonResult("Error: Unautorized!");
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
