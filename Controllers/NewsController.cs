using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace angularjs_netcore.Controllers
{
    [Route("api/[controller]/[action]")]
    public class NewsController : Controller
    {
        [HttpGet]
        public string[] Get()
        {
            //TODO: Implement Realistic Implementation
            return new string[] { "1", "2" };
        }
        public string[] Get2()
        {
            //TODO: Implement Realistic Implementation
            return new string[] { "1", "2" };
        }
    }
}
