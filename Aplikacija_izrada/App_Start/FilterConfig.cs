using System.Web;
using System.Web.Mvc;

namespace Aplikacija_izrada
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
