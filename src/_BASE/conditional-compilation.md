(Migrate this to the Jet Engine documentation.)

## Implicit configuration constants

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

## CONFIG::debug

`CONFIG::debug` indicates whether compilation occurs in debugging mode.

```
CONFIG::debug {
    trace("debugging");
}
```

## CONFIG::release

`CONFIG::release` indicates whether compilation occurs in release mode.

```
CONFIG::release {
    trace("release");
}
```

## CONFIG::test

`CONFIG::test` indicates whether compilation occurs in test mode.

```
CONFIG::test {
    trace("testing");
}
```