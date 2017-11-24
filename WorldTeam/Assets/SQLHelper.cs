using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Assets
{
    public class SQLHelper
    {
        public UserData GetUser(string login, string password)
        {
            string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
            string sqlExpression = $"SELECT * FROM Users WHERE Login = '{login}' AND Password = '{password}';";
            SqlCommand comm = new SqlCommand(sqlExpression, conn);
            SqlDataReader reader = comm.ExecuteReader();

            while (reader.Read())
            {
                UserData user = new UserData();
                user.Name = (string)reader["name"];
                user.Surname = (string)reader["surname"];
                user.Id = (Guid)reader["id"];
                return user;
            }
            reader.Close();
            conn.Close();
            return new UserData();
        }
    }
}