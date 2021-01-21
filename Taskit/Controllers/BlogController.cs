using Microsoft.AspNetCore.Mvc;

namespace Taskit.Controllers {

    [Route("[Controller]")]
    public class BlogController : Controller {

        [HttpGet]
        public IActionResult Index() {
            return View();
        }

    }

}