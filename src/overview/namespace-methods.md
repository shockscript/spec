# Namespace methods

A `class` that implements the self-attached `meta::invoke` meta-method may act as a *namespace method*.

```sx
package zero.fn {
    public class f {
        meta function invoke(options:Options? = null):double (
            n
        )

        public type Options = dynamic {
        }
    }
}
```
