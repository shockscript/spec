# Clone

Use `structuredClone()` to clone objects.

```
structuredClone(object)
```

> **Note:** For class instances to be cloned, the constructor must be optional.

## Custom clone method

A custom `clone()` method may be defined and used for `structuredClone()` as long as the signature is optional.

```
class A {
    public function clone() new A();
}
```
