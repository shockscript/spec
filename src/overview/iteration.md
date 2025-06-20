# Iteration capabilities

ShockScript features full object-oriented iteration.

```
iterator.length()
iterator.some(function(v) v > 0)
iterator.(* > 0) // filter
```

The user may override the key and value iterators by implementing the `Keys` and `Values` interfaces.