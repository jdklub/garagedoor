# GarageDoor

A simple jquery plugin that creates a up/down garage door effect.

_Note: Originally written in 2009. The web has changed a lot._

```html
<h1>Simple</h1>
<span id="demo-1">Hello!</span>


<h2>With Events</h2>
<span id="demo-2">I have events!</span>
<span id="demo-2-output"></span>

```

```javascript
$(document).ready(function() {
    $('#demo-1').GarageDoor();

    $('#demo-2').GarageDoor({
        onRaise: function () {
            $('#demo-2-output').text('Going Up!')
        },
        onLower: function () {
            $('#demo-2-output').text('Going Down!')
        }
    });
})
```
