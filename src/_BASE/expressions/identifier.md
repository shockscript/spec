# Qualified identifier

## Forcing fixture access

```
<?fixed={q::n}?>
<?fixed={object.q::n}?>
```

> **Note**: Forcing fixture access allows to access a variable or method when a class implements `shock_proxy::get(k)` where `k` includes `String` or `QName`. This may also be necessary inside the class body itself to resolve to certain lexical names.