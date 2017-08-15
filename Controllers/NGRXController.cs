namespace NGRXDemo.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    public class NGRXController : ApiController
    {
        public IHttpActionResult Get()
        {
            var disciples = new List<DiscipleModel>();
            disciples.Add(new DiscipleModel
            {
                Name = "Nathan",
                Age = 29
            });
            disciples.Add(new DiscipleModel
            {
                Name = "Drew",
                Age = 30
            });
            
            return Ok(new GodModel()
            {
                IsAllPowerful = true,
                Disciples = disciples
            });
        }
    }
}
