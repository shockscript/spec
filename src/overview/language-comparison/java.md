# Java

## Package flexibility

While importing definitions, the user can alias a definition, or even a package.

**Chart.sx**

```sx
package zero.chart {
    public class Chart {
    }
}
```

**ChartType.sx**

```sx
package zero.chart {
    public enum ChartType {
        const BAR;
        const FLOW;
    }
}
```

**Consumer**

```sx
import cn = zero.chart.*;
//
const chartType : cn::ChartType = "flow";
//
const chart = new cn::Chart(chartType);
```