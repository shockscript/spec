# Fixed expression

**Syntax**

```
<?fixed={x}?>
```

<ul>
    <i>FixedExpression</i> :
    <ul>
        <b>&lt;?fixed=&#x7b;</b> <i>ListExpression</i><sup>allowIn</sup> <b>&#x7d;</b> <b>?&gt;</b>
    </ul>
</ul>

**Semantics**

Deactivates lookup of dynamic properties (implemented through a meta-method such as `meta::get(k)` where `k` includes `string` or `QName`) in the enclosed expression.

> **Note**: This is necessary in rare cases where, for example, a class implements its own dynamic properties which may collide with its prototype. In such cases, instance variables are not accessible unless the user uses the fixed expression `<?fixed={exp}?>`. In the case of `this`, the fixed expression is not necessary as in-scope lookup always uses fixed name lookup.

The fixed name lookup effect is propagated:

- From parenthesized expressions to the inner expression
- From dot operator to base expression
- From brackets operator to base expression