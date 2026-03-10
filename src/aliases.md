# Aliases

Aliases are used in different places of the language:

```sx
import CT = com.business.coreRT.enum.ContactType;
import q = com.business.quantum.*;
type U = (decimal, string);
namespace special_version;
```

## ShockDoc comment

An alias may be prefixed by a ShockDoc comment.

```sx
/** Comment */
type Params = map {
    x : decimal,
}
```