using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InsidePitchV2.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InsidePitchV2.APIControllers
{
    [Route("api/[controller]")]
    public class SecurityQuestionSetupController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;

        public SecurityQuestionSetupController(UserManager<IdentityUser> userManager)
        {
            this.userManager = userManager;
        }

        // PUT api/<controller>/5
        [HttpPut]
        public ActionResult Put(SecurityQuestionSetupViewModel model)
        {
            // add security question answers to user data created in previous
            //      registration step

            return new OkResult();
        }

    }
}
