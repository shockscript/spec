# Access control namespaces

ShockScript allows the user to define properties tied to a namespace, which is useful for version control and protection.

```
package com.company.runner {
    /** @private */
    public namespace runner_internals;

    //
    public class Helper {
        /** @private */
        runner_internals const cache : [Number] = [];

        //
        public function track() {
            runner_internals::cache.push(0);
        }
    }
}

package com.company.runner.advanced {
    import com.company.runner.*;

    //
    public function f(helper:Helper) {
        helper.runner_internals::cache.push(10);
    }
}
```

Namespaces additionally apply to record types.

```
package com.company.products {
    //
    public namespace English;
    public namespace Portuguese;

    //
    public type Product = {
        English::name : String,
        Portuguese::name : String,
    };
}
```