# Unit testing

Basic unit testing may be done by defining functions with the `Test` meta-data at a package-level.

```
package = com.example.foo.tests

[Test]
public function foo() : void {
    assert.equal(2 + 2, 4)
}
```