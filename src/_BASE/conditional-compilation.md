# Conditional compilation

`NAMESPACE::CONSTANT` may match a set configuration constant.

```
NAMESPACE::CONSTANT {
    //
}

NAMESPACE::CONSTANT var x
```

Inline constants:

```
trace(NAMESPACE::CONSTANT)
```

The following:

```
class MyClass {
    //
    CFG::debug {
        //
        private var x : Number;
    }
}
```

is equivalent to:

```
class MyClass {
    //
    CFG::debug private var x : Number;
}
```

## Pre-defined configuration constants

## RT::client

`RT::client` indicates whether the target environment is the client side.

```
RT::client {
    trace("client side");
}
```

## RT::server

`RT::server` indicates whether the target environment is the server side.

```
RT::server {
    trace("server side");
}
```

## CFG::debug

`CFG::debug` indicates whether compilation occurs in debugging mode.

```
CFG::debug {
    trace("debugging");
}
```

## CFG::release

`CFG::release` indicates whether compilation occurs in release mode.

```
CFG::release {
    trace("release");
}
```

## CFG::test

`CFG::test` indicates whether compilation occurs in test mode.

```
CFG::test {
    trace("testing");
}
```