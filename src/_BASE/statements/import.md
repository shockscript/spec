# Import

All of a pacakge:

```
import q.f.*;
```

Specific property:

```
import q.f.x;
```

Alias:

```
import x1 = q.f.x;
```

Alias a package:

```
import f = q.f.*;

f::x
```

Alias a package recursively:

```
package q.f.w {
    public var x = 10;
}

import f = q.f.**;
f::x
```