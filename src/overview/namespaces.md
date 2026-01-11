# Namespaces

ShockScript defines properties whose name is tied to a namespace, which is useful for version control and protection.

```
package com.company.runner {
    /**
     * @private
     */
    namespace product_internals = "http://www.company.com/runner/internals/2007";
}

package com.company.runner {
    //
    class Helper {
        /**
         * @private
         */
        product_internals const cache : [double] = [];

        //
        function track() {
            product_internals::cache.push(0);
        }
    }
}

package com.company.runner.advanced {
    import com.company.runner.*;

    //
    function f(helper:Helper) {
        helper.product_internals::cache.push(10);
    }
}
```

Namespaces additionally apply to record types.

```
package com.business.product {
    /**
     * Flexible version control namespace.
     */
    namespace Flexible = "http://business.com/product/flexible";
}

package com.business.product {
    /**
     * Judgement version control namespace.
     */
    namespace Judgement = "http://business.com/product/judgement";
}

package com.business.product {
    /**
     * Pair.
     */
    type Pair = {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```
