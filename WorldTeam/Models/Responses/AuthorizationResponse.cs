using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models.Responses
{
    public class AuthorizationResponse
    {
        public UserData Data { get; set; }

        public AuthorizationResponse(UserData data)
        {
            Data = data;
        }
    }
}