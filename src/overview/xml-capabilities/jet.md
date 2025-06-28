# Jet Engine features

## Native tags

Native tags belong to the implicit `j` namespace, such as `j:Button`. The `j` namespace is the `http://jet.net` URI, which, if overriden, may be aliased using a `namespace` definition, like `namespace jet = "http://jet.net";`

## Data attributes

`data-` attributes applied to native tags, such as `j:Button`, contribute `data-` attributes to the underlying HTML element.

## Linking cascading style sheets

`s:` attributes are used for linking a style sheet (`s:link={source}` where `source:String`) and argumenting the stylesheet (like `s:color={"red"}`, which is referred by the style sheet as `param(color)`), in native tags.

```
const stylesheet = """
    & { color: param(color) }
    """;

<j:Button
    s:link={stylesheet}
    s:color={"yellow"}>
    <!-- content -->
</j:Button>
```

## Interpolating HTML

`<?html={exp}?>` is used for interpolating HTML, which translates to Jet Engine elements.