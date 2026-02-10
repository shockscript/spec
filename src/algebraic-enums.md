# Algebraic enumerations

Algebraic enumerations, as opposed to simple enumerations, contain `type X()` definitions instead of just `const X` definitions; they desugar to an one-level hierarchy of classes, with the enum being an abstract class.

## Example

```es
package com.q.calculator {
    public enum Exp {
        /**
         * @param left Left-hand side.
         * @param right Right-hand side.
         */
        type Plus(left : Exp, right : Exp)
        type Number(value : decimal)
        type Empty()
    }
}

import com.q.calculator.*

// type inference -
// use lexical @ (attribute) syntax

// each variant implements a meta::call multi-method,
// so it can accept values in different ways.
var exp : Exp = @Empty()
var exp : Exp = @Plus({ left: x, right: y })
var exp : Exp = @Plus(x, y)

switch type (exp) {
    case ({ value } : Number) {
        //
    }
    case ({ left, right } : Plus) {
        //
    }
    case ({} : Empty) {
        //
    }
}
```

## Type inference

An E4X attribute syntactic construct, when used lexically, is used to infer an algebraic enum variant.

```es
var e:E = @A()
var e:E = @Subcategory.A()
```

## Namespaces

The variants of an algebraic enum may be under namespaces for extra conciseness, by using dots in their name:

```es
enum I {
    type Loc.Get(index : uint)
}
```

When using an E4X attribute syntactic construct for inference, one would basically have:

```es
var i : I = @Loc.Get(idx)
```

## Shared properties

When an algebraic enum defines an instance variable, the constructors of each variant expect that variable inside a plain object if the variable isn't optional.

```es
enum Fragment {
    public const location:Location;

    type Simple();
    type Combined(left:Fragment, right:Fragment);
}

Fragment.Simple({ location: loc })
```

## Sub-blocks

Each variant may have its own class block.

```
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

```
type A(...rest : [decimal])
```