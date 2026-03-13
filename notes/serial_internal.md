# serial_internal

The Serial facility must be efficient, thus we auto-generate internal method overrides for adequately annotatated types (Serial/XS).

- Serial annotatated types must, if not implementing one or both of `fromJSON` and `toJSON`, must have Serial annotatated fields (ignore the `*` type).
- XS annotatated types must, if not implementing one or both of `fromXML` and `toXML`, must have XS annotatated fields (ignore the `*` type).
- Auto generate serial_internal::fromJSON for every Serial annotatated type.
  - Reuse fromJSON() if the type implements that.
- Auto generate serial_internal::toJSON overrides for every Serial annotatated type.
  - Reuse toJSON() if the type implements that.
- Auto generate serial_internal::fromXML for every XS annotatated type.
  - Reuse fromXML() if the type implements that.
- Auto generate serial_internal::toXML overrides for every XS annotatated type.
  - Reuse toXML() if the type implements that.

See spec/serial.

## Verifications

- Ensure the Serial/XS meta-data are correct.
- If the surrounding class/ADT is Serial/XS annotatated and fromJSON/toJSON/fromXML/toXML are implemented, ensure they have the expected signature.