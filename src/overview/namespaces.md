# Namespaces

ShockScript defines properties whose name is tied to a namespace, which is useful for version control and protection.

```es
// ===== FunInternal.sx =====


package org.lazy.runner {
    /**
    * @private
    */
    public namespace FunInternal = "http://www.fun.com/2007/runner/internals";
}



// ===== Helper.sx =====


package org.lazy.runner {
    public class Helper {
        /**
        * @private
        */
        FunInternal const cache : [double] = [];

        //
        public function foo() {
            FunInternal::cache.push(0);
        }
    }
}



// ===== friend.sx =====


package org.lazy.runner.advanced {
    import org.lazy.runner.*;

    public function friend(helper:Helper) {
        helper.FunInternal::cache.push(10);
    }
}
```

Namespaces additionally apply to record types.

```
// ===== Flexible.sx =====


package com.jhunter.xy {
    /**
     * Flexible version control namespace.
     */
    public namespace Flexible = "http://www.yveltal.me/xy/flexible";
}


// ===== Judgement.sx =====


package com.jhunter.xy {
    /**
    * Judgement version control namespace.
    */
    public namespace Judgement = "http://www.yveltal.me/xy/judgement";
}



// ===== Pair.sx =====


package com.jhunter.xy {
    /**
    * Pair.
    */
    public type Pair = {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```