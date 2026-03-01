# Environment variables

Environment variables may be read from the project's `.env` file using the `DotEnv::VAR_NAME` expression:

```sx
DotEnv::SECRET
```

Implementations may include predefined variables when using this expression.