# Tuple types

Tuple types, of the form `[t1,t2,tN]`, are immutable sequences consisting of known element types at compile time. A tuple type contains at least two elements.

```sx
[boolean,float]
```

Tuples are stored in an unpacked form internally wherever possible; therefore, accessing a tuple may box it into a new Object whenever requested. ShockScript does not intern tuple objects.