using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class DefaultController : Controller
    {
        // GET: /AjaxTest/
        [HttpGet]
        public ActionResult Index()
            {
                BotDb.GetStudent()

                return View();
            }
        /*[HttpPost]
        public ActionResult FirstAjax(string a)
            {
                return Json("chamara", JsonRequestBehavior.AllowGet);
            }*/
    }
}

