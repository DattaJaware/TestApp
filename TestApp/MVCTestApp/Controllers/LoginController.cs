using MVCTestApp.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCTestApp.Controllers
{
    public class LoginController : Controller
    {
        TestAppDbEntities db = new TestAppDbEntities();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult CheckLogin() {
            return Json("",JsonRequestBehavior.AllowGet);
        }
    }
}