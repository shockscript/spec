# Java

## Package flexibility

While importing definitions, the user can alias a definition, or even a package.

```
// ===== Chart.es =====

package = com.example.product.core;

public class Chart {
    //
}

// ===== ChartType.es =====

package = com.example.product.core;

public enum ChartType {
    const BAR;
    const FLOW;
}

// ===== usage =====

import p = com.example.product.core.*;
//
const chartType : p::ChartType = "flow";
//
const chart = new p::Chart(chartType);
```