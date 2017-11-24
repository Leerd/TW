using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Http;
using WebApplication1.Models;
using WebApplication1.Models.Requests;

public class ValuesController : ApiController
{

    [HttpGet]
    public List<Games> GetAllGames()
    {
        string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
        SqlConnection conn = new SqlConnection(connectionString);
        conn.Open();
        string sqlExpression = $"SELECT Id ,Game_name FROM Games;";
        SqlCommand comm = new SqlCommand(sqlExpression, conn);
        SqlDataReader reader = comm.ExecuteReader();

       List<Games> games = new List<Games>();

        while (reader.Read())
        {
            Games game = new Games();
            game.Id = (Guid)reader["Id"];
            game.Name = (string)reader["Game_name"];
            games.Add(game);
        }

        reader.Close();
        conn.Close();

        return games;
    }

    public void UpateGameStatus(GameUpdateRequests request)
    {
        string connectionString = "Server=localhost;Database=TeamWorld;Trusted_Connection=True;";
        SqlConnection conn = new SqlConnection(connectionString);
        conn.Open();
        string sqlExpression = $"INSERT INTO User_games VALUES (NEWID(),'{request.UserId}','{request.GameId}')";
        SqlCommand cmd = new SqlCommand(sqlExpression, conn);
        cmd.ExecuteNonQuery();
        conn.Close();
    }
}