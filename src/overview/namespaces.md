# Namespaces

ShockScript defines properties whose name is tied to a namespace, which is useful for version control and protection.

**Helper.sx**

```sx
package org.lazy.runner {
    public class Helper {
        private namespace FunInternal = "http://www.fun.com/2007/runner/internals";

        /** @private */
        FunInternal const cache : [double] = [];

        //
        public function foo() {
            FunInternal::cache.push(0);
        }
    }
}
```

**friend.sx**

```sx
package org.lazy.runner.advanced {
    import org.lazy.runner.*;

    public function friend(helper:Helper) {
        namespace FunInternal = "http://www.fun.com/2007/runner/internals";

        helper.FunInternal::cache.push(10);
    }
}
```

Namespaces additionally apply to record types.

**Flexible.sx**

```sx
package zero.hit {
    public namespace Flexible = "http://www.zero.org/hit/Flexible";
}
```

**Judgement.sx**

```sx
package zero.hit {
    public namespace Judgement = "http://www.zero.org/hit/Judgement";
}
```

**Pair.sx**

```sx
package zero.hit {
    public type Pair = map {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```