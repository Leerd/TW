using System;
using System.Data.SqlClient;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication1.Assets;
using WebApplication1.Models;
using WebApplication1.Models.Responses;

namespace WebApplication1.Controllers
{
    public class AuthorizeController : ApiController
    {
        [HttpPost]
        public AuthorizationResponse GetUser(AuthorizationRequest request)
        {
            return new AuthorizationResponse(new SQLHelper().GetUser(request.Login, request.Password));
        }

        [HttpPost]
        public HttpResponseMessage Upload()
        {
            //string subPath = "ImagesPath"; 

            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
       
            if (httpRequest.Files.Count > 0)
            {
                var t = httpRequest.Files[0];
                string subPath = "~/Files/" + t.FileName;

                bool exists = System.IO.Directory.Exists(HttpContext.Current.Server.MapPath(subPath));

                if (!exists)
                    System.IO.Directory.CreateDirectory(HttpContext.Current.Server.MapPath(subPath));

                var postedFile = httpRequest.Files[1];
                var filePath = HttpContext.Current.Server.MapPath("~/Files/" + "/" + t.FileName + "/" + postedFile.FileName);
                postedFile.SaveAs(filePath);

                //foreach (string file in httpRequest.Files)
                //{
                //    var postedFile = httpRequest.Files[file];
                //    var filePath = HttpContext.Current.Server.MapPath("~/Files/" + postedFile.FileName);
                //    postedFile.SaveAs(filePath);
                //}
            }
            return response;
        }
    }
}
