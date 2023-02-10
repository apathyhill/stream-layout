# stream-layout
A customizable website containing common stream information for use in OBS.

## Usage
In a browser source, use these URLs:  
[Info URL](info.html)  
[Screen URL](screen.html)  

## Customization
Using Custom CSS, certain variables can be changed with the following syntax:

### Global
```css
:root {
    --main-color: color; /* The color used for label banners. */
    --main-color-2: color; /* The secondary color used for label banners. (defaults to first color) */
    --background-color: color; /* The color used for label backgrounds. */
    --text-color: color; /* The color used for label texts. */
    --font: "font"; /* The font used for label texts. */
    --border-width: 5px; /* The thickness of the borders around boxes. */
}
```

### Info
```css
:root {
    --label-visible: 1; /* The visiblity of labels. */
    --line-height: 30px; /* The height of labels. */
}

#label-events { --label-text: "text"; } /* The text to used in the events box label. */
#label-chat { --label-text: "text"; } /* The text to used in the chat box label. */
#box-screen { --viewer-visible: 0; } /* Visibility of the "viewer" box. (can be used for a camera or secondary screen) */
```

### Screen
```css
:root {
    --screen-width: 1440px; /* The width of the screen box. */
    --screen-height: 810px; /* The height of the screen box. */
}
```

## To Do
* Make Streamlabs widgets work natively in layout.