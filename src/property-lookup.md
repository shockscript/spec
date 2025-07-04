# Property lookup

## LookupKey

*LookupKey* is either *LocalName*(*name*) or *Computed*(*value*).

### LookupKey.Value

*LookupKey*.Value returns:

- For *LocalName*(*name*), a *StringConstant* equivalent to *name* or defer if `String` is unresolved.
- For *Computed*(*value*), *value*.

### LookupKey.Type

*LookupKey*.Type returns:

- For *LocalName*(*name*), the `String` type or defer.
- For *Computed*(*value*), the static type of *value* or defer.

### LookupKey.Double

*LookupKey*.Double returns:

- For *LocalName*(*name*), undefined.
- For *Computed*(*value*), *value* is *NumberConstant*(*v*) ? force convert *v* to a `Number` : undefined.

## PropertyLookup()

*PropertyLookup*(*base*, *openNsSet*, *qual*, *key* as *LookupKey*, *followedByCall* as `Boolean`, *forceFixture* as `Boolean`) takes the following steps in order, where *forceFixture* allows forcing access to a fixture property on dynamic types (used by the `<?fixed={}?>` expression):

- If *base* is invalidation
  - Return invalidation
- Let *localName* = *key* is *LocalName*(*name*) ? *name* : undefined
- Let *doubleKey* = *key*.Double
- If *base* is a *TypeConstant*(*type*)
  - *base* = *type*
- Else if *base* is a *FixtureReferenceValue* and *base*.Property is a type
  - *base* = *base*.Property
- If *base* is a class
  - If *localName* is undefined or (*qual* is specified and *qual* is not a namespace nor a *NamespaceConstant*)
    - Return *StaticDynamicReferenceValue*(*base*, *qual*, *k*.Value)
  - For each descending *class* in *base* hierarchy
    - Defer if *class* is unresolved.
    - Let *r* = *GetQNameInNsSetOrAnyPublicNs*(*class* static properties, *openNsSet*, *qual*, *localName*)
    - If *r* != undefined
      - Mark *r* as used.
      - Let *r* = *r*.ResolveAlias()
      - Defer if *r* property's static type is unresolved.
      - Return *r*.Wrap()
  - Return undefined
- If *base* is an interface
  - Return undefined
- If *base* is a value
  - Let *baseType* = static type of *base* or defer
  - If *baseType* is invalidation
    - Return invalidation
  - If (*followedByCall* == false and *forceFixture* == false) and *baseType* defines an instance method `shock_proxy::get` (possibly a multi method)
    - Let *foundRegularProperty* = false
    - For each `shock_proxy::get(k:K):V` method
      - If *qual* != undefined
        - If *K* == `*` or *K* == (`Object` or defer) or *K* == (`QName` or defer) or *K* ?union contains (`QName` or defer)
          - Return *KeyValuePairReferenceValue*(*base*, *proxy method*, *qual* as a `Namespace` object, *key*.Value coerced to (`String` or defer))
        - Continue loop
      - If *key*.Value is a (`String` or defer) value and (*K* == (`QName` or defer) or (*K* ?union does not contain `String` and *K* union contains `QName`))
        - Return *KeyValuePairReferenceValue*(*base*, *proxy method*, undefined, *key*.Value)
      - If *K* == `*` or *K* == (`Object` or defer) or *K* == (`String` or defer) or *K* == (`QName` or defer) or (*K* ?union contains `String` or *K* union contains `QName`)
        - *foundRegularProperty* = true
      - If (static type of *key*.Value or defer) fails on implicit coercion to *K*
        - Continue loop
      - Return *KeyValuePairReferenceValue*(*base*, *proxy method*, undefined, *key*.Value implicitly coerced to *K*)
    - If (static type of *key*.Value or defer) != (`String` or defer) or *foundRegularProperty*
      - Throw a verify error
  - Let *hasKnownNs* = *qual* == undefined or (*qual* is a namespace or *NamespaceConstant*)
  - If *localName* == undefined
    - If *doubleKey* != undefined and *baseType* is a tuple
      - Let *i* = *doubleKey* coercion to integer
      - If *i* < 0 or *i* >= *baseType*.ElementTypes.Length
        - Throw a verify error
      - Return *TupleReferenceValue*(*base*, *i*)
    - Return *DynamicReferenceValue*(*base*, *qual*, *key*.Value, *followedByCall*, *forceFixture*)
  - If *baseType* == `*`
    - Return *DynamicReferenceValue*(*base*, *qual*, *key*.Value, *followedByCall*, *forceFixture*)
  - If *baseType* is a class
    - For each descending *class* in *baseType* hierarchy
      - Defer if *class* is unresolved
      - Let *prop* = *GetQNameInNsSetOrAnyPublicNs*(*class* prototype properties, *openNsSet*, *qual*, *localName*)
      - If *prop* != undefined
        - Mark *prop* as used
        - *prop* = *prop*.ResolveAlias()
        - Call *prop*.Defer() (*if about to defer, implementation may report the cause as unresolved expression in a location*)
        - If *prop* is a namespace or *NamespaceConstant*
          - Return *NamespaceConstant*(*prop*) if *prop* is a namespace, or otherwise *prop* as is
        - Return *InstanceReferenceValue*(*base*, *prop*)
    - For implemented interfaces of *baseType*
      - *Lookup method (step required for optional methods)*
  - Else if *baseType* is an interface
    - For each descending *itrfc* in *baseType* hierarchy
      - Defer if *itrfc* is unresolved
      - Let *prop* = *GetQNameInNsSetOrAnyPublicNs*(*itrfc* prototype properties, *openNsSet*, *qual*, *localName*)
      - If *prop* != undefined
        - Mark *prop* as used
        - *prop* = *prop*.ResolveAlias()
        - Call *prop*.Defer() (*if about to defer, implementation may report the cause as unresolved expression in a location*)
        - Return *InstanceReferenceValue*(*base*, *prop*)
    - *Lookup for the* `Object` *instance definitions*
  - Return undefined.
- If *base* is a `package`
  - If *localName* is undefined or (*qual* is specified and *qual* is not a namespace nor a *NamespaceConstant*)
    - Throw a verify error
  - Let r = undefined
  - Let *prop* = *GetQNameInNsSetOrAnyPublicNs*(*base* properties, *openNsSet*, *qual*, *localName*)
  - If *prop* != undefined
    - Mark *r* as used.
    - *prop* = *prop*.ResolveAlias()
    - Call *prop*.Defer() (*if about to defer, implementation may report the cause as unresolved expression in a location*)
    - *r* = *prop*.Wrap()
  - Return r
- If *base* is a *EventPairBoundType*(*base*) bound type
  - If *localName* is undefined or (*qual* is specified)
    - Return undefined.
  - If *localName* = **name**
    - Return *EventNameBoundType*(bound).Wrap()
  - If *localName* = **type**
    - Return *EventTypeBoundType*(previously introduced name bound).Wrap().
  - Return undefined.
- Return undefined.

> **Note**: entity.Wrap() wraps entities into values. For instance, wrapping a variable into a property reference, where it belongs to a package, will produce a *PackageReferenceValue*.

> **Note**: entity.Defer() defers if an entity is unresolved or if a direct compound is unresolved.

## InScopeLookup()

*InScopeLookup*(*scope*, *qual*, *key* as *LookupKey*, *followedByCall* as `Boolean`, *forceFixture* as `Boolean`) takes the following steps in order:

> **Note**: Content lacking.