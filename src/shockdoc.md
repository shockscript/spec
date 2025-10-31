# ShockDoc comments

ShockDoc are documentation comments that use the format `/** */`. Markdown notation is supported in ShockDoc comments.

For each line, the beginning whitespace is stripped, then the `*` character and a single following white space character are stripped, and the resting characters are the actual line contents.

Line contents may start with a tag (such as `@deprecated`). Tags may span multiple lines until the next tag appears; tags that do not accept content do not span any more characters.

Code blocks (whose delimiters consist of at least three backticks **\`\`\`**) as expressed in Markdown cause tags to be ignored in the code content, as in:

```
/**
 * ```plain
 * @deprecated
 * ```
 */
```

## Local images

ShockDoc comments may refer to relative images through the Markdown notation `![image](./path/to/image)`.

## Supported tags

### \@copy

Copies ShockDoc comment from another definition. Use a `#x` component to refer to an instance property.

```plain
@copy A
@copy A.w
@copy A#x
@copy #x
```

### \@default

Default value as an uninterpreted expression.

```
@default exp
```

### \@deprecated

```plain
@deprecated [Description]
```

### \@example

```
@example
The following...
```

### \@eventparam

Indicates that a record type's property is an event handler. The tag does nothing but move the item to the *Events* section of the documentation, similiar to how happens with the `Event` meta-data used in class definitions.

```plain
@eventparam
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