# ASDoc

Documentation comments use the format `/** */`, with lines optionally beginning with `*`. Markdown notation is supported in ASDoc comments.

## Local images

ASDoc comments may refer to relative images.

## Supported tags

### \@copy

Copies documentation comment from another definition. Use a `#x` component to refer to an instance property.

```plain
@copy A
@copy A.w
@copy A#x
@copy #x
```

### \@deprecated

```plain
@deprecated [Description]
```

### \@inheritDoc

Inherits documentation from base class or base class's item.

```plain
@inheritDoc
```

### \@internal

Internal comment for an item (not included in the generated documentation).

```plain
@internal Comment.
```

### \@param

```plain
@param paramName Description
```

### \@private

Hides an item from the generated documentation.

```plain
@private
```

### \@return

```plain
@return Description
```

### \@see

Where `item` maybe an item reference with optional `#x` instance property, or just an instance property `#x`.

```plain
@see item [Display text]
```

### \@throws

```plain
@throws ClassName [Description]
```