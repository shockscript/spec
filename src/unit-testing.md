# Unit testing

Basic unit testing may be done by defining functions annotated with the `Test` meta-data at a package-level.

```
package com.jhunter.q1.tests {
    [Test]
    public function foo() : void {
        assert.equal(2 + 2, 4)
    }
}
```

Or the user may define a class annotated with the `TestSuite` meta-data at a package-level, consisting of an empty constructor and instance methods annotated with the `Test` meta-data.

```
package com.jhunter.q1.tests {
    [TestSuite]
    public class Tests {
        [Test]
        public function foo() : void {
            //
        }
    }
}
```