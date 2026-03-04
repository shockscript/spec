# Environment variables

Environment variables may be read from the project's `.env` file using the `Env::VAR_NAME` expression:

```sx
Env::SECRET
```

Implementations may include predefined variables when using this expression.