# Java

## Package flexibility

While importing definitions, the user can alias a definition, or even a package.

```
package com.business.product.core {
    //
    class Chart {
        //
    }
}
package com.business.product.core {
    //
    enum ChartType {
        const BAR;
        const FLOW;
    }
}

import p = com.business.product.*;
//
const chartType : p::ChartType = "flow";
//
const chart = new p::Chart(chartType);
```