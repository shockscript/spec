# Java

## Package flexibility

While importing definitions, the user can alias a definition, or even a package.

```
// ===== Chart.es =====


package com.jhunter.q1.core {
    public class Chart {
        //
    }
}



// ===== ChartType.es =====


package com.jhunter.q1.core {
    public enum ChartType {
        const BAR;
        const FLOW;
    }
}



// ===== usage =====


import p = com.jhunter.q1.core.*;
//
const chartType : p::ChartType = "flow";
//
const chart = new p::Chart(chartType);
```