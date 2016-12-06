using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Core
{
    public static class Extensions
    {
        public static void ForEach<T>(this IEnumerable<T> ie, Action<T> action)
        {
            foreach (var i in ie) action(i);
        }

        public static T With<T>(this T o, Action<T> action)
        {
            action(o);
            return o;
        }
    }
}
