# Clone

`generic::clone` performs a common clone.

```sx
o.generic::clone()
```

You may customize it for a class with:

```sx
public function clone(deep:boolean = true):c {
}

// or
public function clone():c {
}
```

Any parameters are allowed as long as they are optional; however if the first one is a Boolean, it is understood as the `deep` parameter.