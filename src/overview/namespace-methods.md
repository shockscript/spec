# Namespace methods

A `class` that implements the static `meta::call` hook may act as a *namespace method*.

```sx
package com.zero.fn {
    public class N {
        meta static function call(options:Options? = null):double {
            //
        }

        public type Options = {
            //
        };
    }
}
```
