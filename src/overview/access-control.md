# Access control namespaces

ShockScript allows the user to define properties tied to a namespace, which is useful for version control and protection.

```
package com.company.runner {
    /** @private */
    public namespace runner_internals;
}

package com.company.runner {
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
package com.business.product {
    /**
     * Flexible version control namespace.
     */
    public namespace Flexible = "http://business.com/product/flexible";
}

package com.business.product {
    /**
     * Judgement version control namespace.
     */
    public namespace Judgement = "http://business.com/product/judgement";
}

package com.business.product {
    /**
     * Pair.
     */
    public type Pair = {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```
