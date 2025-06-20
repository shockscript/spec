# Aliases

Aliases are used in different places of the language:

```
import CT = com.business.coreRT.enum.ContactType;
import q = com.business.quantum.**;
type U = (decimal, String);
namespace special_version;
```

## Documentation comment

An alias may be prefixed by a documentation comment.

```
/** Comment */
type Params = {
    x : decimal,
};
```