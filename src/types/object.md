# Object

All types but \{ `void`, `null`, `uint`, `int`, `float`, `Number`, `decimal`, `BigInt`, `Boolean` \} represent referenceable objects that may be `null`. The `Object` class is inherited by all types but \{ `*`, `void`, `null`, union \}.

<blockquote>

**Note**: When it is necessary to read the constructor of an object, use:

```
Reflect.constructor(obj)
```

</blockquote>