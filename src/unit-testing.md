# Unit testing

Basic unit testing may be done by defining functions with the `Test` meta-data at a package-level.

```
package com.example.foo.tests {
    // unit tests
    ES4::testing {
        [Test]
        function testFoo():void {
            assertEquals(2 + 2, 4);
        }
    }
}
```