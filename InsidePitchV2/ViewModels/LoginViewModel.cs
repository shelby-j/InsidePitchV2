using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InsidePitchV2.ViewModels
{
    public class LoginViewModel
    {
        public string Username { get; set; }
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }
       
    }
}
