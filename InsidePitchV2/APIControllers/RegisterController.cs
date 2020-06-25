using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InsidePitchV2.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InsidePitchV2.APIControllers
{
    [Route("api/[controller]")]
    public class RegisterController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;

        public RegisterController(UserManager<IdentityUser> userManager)
        {
            this.userManager = userManager;
        }

        // POST api/<controller>
        [HttpPut]
        public ActionResult Put(RegisterViewModel model)
        {
            if (model.Password != model.ConfrimPassword)
            {
                return new UnauthorizedResult();
            }

            IdentityUser user = new IdentityUser
            {

                UserName = model.Username,
                Email = model.Email

            };

            userManager.CreateAsync(user, model.Password);

            return new OkResult();

        }

        
    }
}
