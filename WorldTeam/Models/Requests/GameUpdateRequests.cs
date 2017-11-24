using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models.Requests
{
    public class GameUpdateRequests
    {
        public Guid UserId { get; set; }

        public Guid GameId { get; set; }
    }
}