# Aliases

Aliases are used in different places of the language:

```
import CT = com.business.coreRT.enum.ContactType;
import q = com.business.quantum.*;
type U = (decimal, string);
namespace special_version;
```

## ESDoc comment

An alias may be prefixed by a ESDoc comment.

```
/** Comment */
type Params = {
    x : decimal,
};
```