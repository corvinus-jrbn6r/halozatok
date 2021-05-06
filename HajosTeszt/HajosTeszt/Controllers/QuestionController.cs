using HajosTeszt.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("kerdes/count")]
        public int M1()
        {
            hajostesztContext context = new hajostesztContext();
            int kerdesekszama = context.Questions.Count();
            return kerdesekszama;
        }

        [HttpGet]
        [Route("kerdes/{sorszam}")]

        public ActionResult M2(int sorszam)
        {
            hajostesztContext context = new hajostesztContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();

            if (kerdes == null) return BadRequest("Nincs ilyen kérdés");

            return new JsonResult(kerdes);
         
        }
}
}
