# Fixed expression

May be used inside a type's implementation where regular property access prioritizes dynamic properties.

> **Note**: This is necessary in rare cases where, for example, a class implements its own dynamic properties which may collide with its prototype. In such cases, instance variables are not accessible unless the user uses the fixed expression `<?fixed={exp}?>`. In the case of `this`, the fixed expression is not necessary as in-scope lookup always uses fixed-only name resolution.

```
<?fixed={exp}?>
```

The fixed name lookup effect is propagated:

- From parenthesized expressions to the inner expression
- From dot operator to base expression
- From brackets operator to base expression