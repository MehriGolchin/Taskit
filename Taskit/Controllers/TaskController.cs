using Microsoft.AspNetCore.Mvc;

namespace Taskit.Controllers
{
  [Route("[Controller]")]
  public class TaskController: Controller
  {
    [HttpGet]
    public IActionResult Index()
    {
	    return View();
    }
  }
}