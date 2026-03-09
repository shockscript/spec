# Namespace methods

A `class` that implements the static `meta::call` hook may act as a *namespace method*.

```sx
package zero.fn {
    public class f {
        meta static function call(options:Options? = null):double (
            n
        )

        public type Options = dynamic {
        }
    }
}
```
