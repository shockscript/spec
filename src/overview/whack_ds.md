# Whack DS

Whack DS is a feature of the Whack engine used for extending the closed set of Whack's UI component classes with reactive components. It is functionally similiar to React.js, but its syntax is more similiar to Adobe MXML.

## Memoization

Whack DS automatically memoizes components, allowing for user customizable parameter/state equality comparison through overriding the `[object Object].equals(obj)` method. Memoization basically serves the purpose of avoiding re-rendering a component when its parameters do not change.

Just like with React.js, memoizing components has drawbacks such as possibly volatile code regions (such as when internationalizing a product with locale-specific translation strings). In such cases, relying on a Whack DS context will re-render the component when the context changes regardless of whether parameters did or not change.

Whack DS skips re-rendering component if the parent re-renders and the parameters are equals to the previous render; the Whack DS component's own states updating with a different value will always re-render it.

> **Note**: To avoid *old state comparison issues*, the properties object must not be reused for mutation (since Whack DS does not know how to clone them).

## Style blocks

Whack DS supports style sheets out of the box. Here is a simple example:

```
<w:VGroup>
    <w:Style><![CDATA[
        :host {
            background: red;
        }
    ]]></w:Style>
</w:VGroup>
```

## How a component is defined

There are different ways to declare a component. Here are some examples:

```es
// ===== Main.sx =====


package com.pso2.relic {
    public function Main():whack.ds.Node {
        //
    }
}



// ===== Button.sx =====


package spark.components {
    public class Button {
        meta static function call(props:Props):whack.ds.Node {
            //
        }

        public type Props = {
            //
        };
    }
}



// ===== AnotherWay.sx =====


package net.cowboy.components {
    public enum AnotherWay {
        const HIT;
        const NOTHING;

        public function eval(props:Props):whack.ds.Node {
            //
        }

        public type Props = {
            //
        };
    }
}
```

## EyeExp

Whack's approach to logotypes and icons is called the EyeExp feature, which uses dynamic icon names rather than `enum`.

```
// ===== Main.sx =====


package com.actvn.thps {
    public function Main():whack.ds.Node {
        // initialize
        whack.ds.useEffect(function() {
            com.sweaxizone.metro.eyexp.initialize();
        }, []);

        return (
            <w:VGroup gap={13}>
                <w:EyeExp name="camera" size={37}/>

                <!-- usage as a css background -->

                <w:Group s:background="eyexp(camera) no-repeat center / contain"/>
            </w:VGroup>
        );
    }
}



// ===== initialize.sx =====


package com.sweaxizone.metro.eyexp {
    import whack.eyexp.EyeExp;

    public function initialize():void {
        EyeExp.camera = { url: Embed("camera.svg"), monochrome: true };
    }
}
```

Monochrome icons are filled with the current CSS `color`.
