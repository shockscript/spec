# Iteration

ShockScript features full object-oriented iteration.

```sx
coconuts.length()
scores.some(function({score}) score > 0)
people.(*.age >= 18)
```

The user may override the key and value iterators by implementing the `Iterable.<K, V>` interface.

```sx
class A implements Iterable.<string, double> {
    public function keys():string {
        for (var i = 0; i < 10; i++) {
            yield i.toString();
        }
    }

    public function values():double {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```
