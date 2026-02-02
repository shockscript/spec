# Namespace methods

A `class` that implements the static `meta::call` hook may act as a *namespace method*. This is useful in several cases, including:

- Assertion methods in the top-level package (for example, `assert.equal`)
- Design language components (for instance, one source file declares the whole component, rather than one source file for the rendering method and another source file for the  properties record)

```es
package spark.components {
    public class Button {
        meta static function call(props:Props):whack.ds.Node {
            //
        }

        public type Props = {
            //
        };
    }
}
```
