# Namespaces

ShockScript defines properties whose name is tied to a namespace, which is useful for version control and protection.

```es
// ===== FunInternal.es =====

package = com.fun.runner;

/**
 * @private
 */
public namespace FunInternal = "http://www.fun.com/2007/runner/internals";



// ===== Helper.es =====

package = com.fun.runner;

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



// ===== friend.es =====

package = com.fun.runner.advanced;

import com.fun.runner.*;

public function friend(helper:Helper) {
    helper.FunInternal::cache.push(10);
}
```

Namespaces additionally apply to record types.

```
// ===== Flexible.es =====

package = com.example.product;

/**
 * Flexible version control namespace.
 */
public namespace Flexible = "http://business.com/product/flexible";



// ===== Judgement.es =====

package = com.example.product;

/**
 * Judgement version control namespace.
 */
public namespace Judgement = "http://business.com/product/judgement";



// ===== Pair.es =====

package = com.example.product;

/**
 * Pair.
 */
public type Pair = {
    Flexible::strength : [decimal],
    Judgement::strength : [decimal],
};
```
