# Java

## Package flexibility

While importing definitions, the user can alias a definition, or even a package.

```
package com.business.product.core {
    //
    public class Chart {
        //
    }
}
package com.business.product.core {
    //
    public enum ChartType {
        const BAR;
        const FLOW;
    }
}

import pns = com.business.product.*;
//
const chart_type : pns::ChartType = "flow";
//
const chart = new pns::Chart(chart_type);
```