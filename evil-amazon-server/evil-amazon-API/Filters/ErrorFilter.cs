using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;

namespace evil_amazon_server.Filters
{
    public class ErrorFilter:ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            context.ModelState.AddModelError("Error", "Internal server error");
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var list = context.ModelState.Where(x => x.Value.Errors.Count > 0)
                .ToDictionary(x => x.Key, y => y.Value.Errors
                .Select(z => z.ErrorMessage));

            context.Result = new JsonResult(list);
        }
    }
}
