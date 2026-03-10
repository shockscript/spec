# Algebraic enumerations

Algebraic enumerations, as opposed to simple enumerations, contain `type X()` definitions instead of just `const X` definitions; they desugar to an one-level hierarchy of classes, with the enum being an abstract class, and with each variant being a class with a `meta::invoke` method (so you can specify either the defined signature, or an object literal).

## Example

```sx
enum Exp {
    /**
     * @param left Left-hand side.
     * @param right Right-hand side.
     */
    type Plus(left : Exp, right : Exp)
    type Number(value : decimal)
    type Empty()
}

var exp : Exp

exp = Empty()
exp = Plus({ left: x, right: y })
exp = Plus(x, y)

switch type (exp) {
    case (Number(value)) {
    }
    case (Plus(x, y)) {
    }
    case (Empty()) {
    }
}
```

## Type inference

```sx
var e:E = A()
var e:E = Subcategory.A()

v is A
v as Subcategory.A
```

## Namespaces

The variants of an algebraic enum may be under namespaces for extra conciseness, by using dots in their name:

```sx
enum I {
    type Loc.Get(index : uint)
}
```

With type inference, one would basically have:

```sx
var i : I = Loc.Get(idx)
```

## Shared properties

When an algebraic enum defines an instance variable, the constructors of each variant expect that variable inside a plain object if the variable isn't optional.

```sx
enum Fragment {
    public const location:Location;

    type Simple();
    type Combined(left:Fragment, right:Fragment);
}

Fragment.Simple({ location: loc })
```

## Sub-blocks

Each variant may have its own class block.

```sx
enum E {
    type A() {
        override public function get x() : double (10)
    }
    type B() {
        override public function get x() : double (24)
    }

    public abstract function get x() : double
}
```

## Variant parameter list

Variant parameter lists may have follow entirely method signatures, having required parameters, default parameters and a rest parameter.

```sx
type A(...rest : [decimal])
```