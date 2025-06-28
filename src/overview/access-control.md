# Access control namespaces

ShockScript allows the user to define properties tied to a namespace, which is useful for version control and protection.

```
package com.company.mrrunner {
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

package com.company.mrrunner.advanced {
    import com.company.mrrunner.*;

    //
    public function f(helper:Helper) {
        helper.runner_internals::cache.push(10);
    }
}
```