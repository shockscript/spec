# Object type

All types but \{ `void`, `null`, `uint`, `int`, `float`, `double`, `decimal`, `bigint`, `boolean`, `string` \} represent referenceable objects. The `Object` class is inherited by all types but \{ `*`, `void`, `null`, union \}.

<blockquote>

**Note**: When it is necessary to obtain the constructor of an object, use:

```
obj.meta::class()
```

</blockquote>