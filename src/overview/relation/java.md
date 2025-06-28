# Java

## Package flexibility

ShockScript has an advantage over Java when it comes to packages: the user can import a package recursively and even alias it.

```
package com.business.product.core {
    //
    public class Chart {
        //
    }
}
package com.business.product.core.enum {
    //
    public enum ChartType {
        const BAR;
        const FLOW;
    }
}

import pns = com.business.product.**;
//
const chart_type : pns::ChartType = "flow";
//
const chart = new pns::Chart(chart_type);
```

When doing so, the user must ensure that a name is not to collide with another name.

```
package com.company.product {
    public const x = 0;
}
package com.company.product.omega {
    public const x = 10, y = 10.5;
}
import pns = com.company.product.**;
pns::y // OK
pns::x // ERROR! name conflict
```