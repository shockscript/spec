# Object type

All types but \{ `void`, `null`, `uint`, `int`, `float`, `Number`, `decimal`, `BigInt`, `Boolean` \} represent referenceable objects, which are nullable by default. The `Object` class is inherited by all types but \{ `*`, `void`, `null`, union \}.

<blockquote>

**Note**: When it is necessary to obtain the constructor of an object, use:

```
obj.Reflect::class()
```

</blockquote>