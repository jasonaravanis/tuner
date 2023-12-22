import { globalStyle } from "@vanilla-extract/css";
import { globalLayer } from "@vanilla-extract/css";

const reset = globalLayer("reset");

/* Based on https://github.com/jensimmons/cssremedy and adapted for vanilla extract */

/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
*/
globalStyle("*::before, *::after, *", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box" /* 1 */,
    },
  },
});

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
*/
globalStyle("html", {
  "@layer": {
    [reset]: {
      lineHeight: 1.5, // 1
      WebkitTextSizeAdjust: "100%", // 2
      MozTabSize: 4, // 3
      tabSize: 4, // 3
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', // 4
    },
  },
});

/*
  1. Remove the margin in all browsers.
  2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
  3. Set base text font size to override REM size
*/
globalStyle("body", {
  "@layer": {
    [reset]: {
      margin: 0, // 1
      lineHeight: "inherit", // 2
      background: "#f9f9f9",
    },
  },
});

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Ensure horizontal rules are visible by default.
*/
globalStyle("hr", {
  "@layer": {
    [reset]: {
      height: 0, // 1
      color: "inherit", // 2
      borderTopWidth: "1px", // 3
    },
  },
});

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/
globalStyle("abbr:where([title])", {
  "@layer": {
    [reset]: {
      textDecoration: "underline dotted",
    },
  },
});

/*
  Remove the default font size and weight for headings.
*/
globalStyle("h1, h2, h3, h4, h5, h6", {
  "@layer": {
    [reset]: {
      fontSize: "inherit",
      fontWeight: "inherit",
    },
  },
});

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/
globalStyle("a", {
  "@layer": {
    [reset]: {
      color: "inherit",
      textDecoration: "inherit",
    },
  },
});

/*
  Add the correct font weight in Edge and Safari.
*/
globalStyle("b, strong", {
  "@layer": {
    [reset]: {
      fontWeight: "bolder",
    },
  },
});

/*
  1. Use a nice default `mono` font family by default.
  2. Correct the odd `em` font sizing in all browsers.
*/
globalStyle("code, kbd, samp, pre", {
  "@layer": {
    [reset]: {
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // 1
      fontSize: "1em", // 2
    },
  },
});

/*
  Add the correct font size in all browsers.
*/
globalStyle("small", {
  "@layer": {
    [reset]: {
      fontSize: "80%",
    },
  },
});

/*
  Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/
globalStyle("sub, sup", {
  "@layer": {
    [reset]: {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
  },
});

globalStyle("sub", {
  "@layer": {
    [reset]: {
      bottom: "-0.25em",
    },
  },
});

globalStyle("sup", {
  "@layer": {
    [reset]: {
      top: "-0.5em",
    },
  },
});

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/
globalStyle("table", {
  "@layer": {
    [reset]: {
      textIndent: 0, // 1
      borderColor: "inherit", // 2
      borderCollapse: "collapse", // 3
    },
  },
});

/*
  1. Change the font styles in all browsers.
  2. Remove the margin in Firefox and Safari.
  3. Remove default padding in all browsers.
*/
globalStyle("button, input, optgroup, select, textarea", {
  "@layer": {
    [reset]: {
      fontFamily: "inherit", // 1
      fontSize: "100%", // 1
      fontWeight: "inherit", // 1
      lineHeight: "inherit", // 1
      color: "inherit", // 1
      margin: 0, // 2
      padding: 0, // 3
    },
  },
});

/*
  Remove the inheritance of text transform in Edge and Firefox.
*/
globalStyle("button, select", {
  "@layer": {
    [reset]: {
      textTransform: "none",
    },
  },
});

/*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Remove default button styles.
*/
globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  "@layer": {
    [reset]: {
      WebkitAppearance: "button", // 1
      backgroundColor: "transparent", // 2
      backgroundImage: "none", // 2
      border: 0, // 2
    },
  },
});

/*
  Use the modern Firefox focus style for all focusable elements.
*/
globalStyle(":-moz-focusring", {
  "@layer": {
    [reset]: {
      outline: "auto",
    },
  },
});

/*
  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
globalStyle(":-moz-ui-invalid", {
  "@layer": {
    [reset]: {
      boxShadow: "none",
    },
  },
});

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/
globalStyle("progress", {
  "@layer": {
    [reset]: {
      verticalAlign: "baseline",
    },
  },
});

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle("::-webkit-inner-spin-button,::-webkit-outer-spin-button ", {
  "@layer": {
    [reset]: {
      height: "auto",
    },
  },
});

/*
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
*/
globalStyle("[type='search']", {
  "@layer": {
    [reset]: {
      WebkitAppearance: "textfield", // 1
      outlineOffset: "-2px", // 2
    },
  },
});

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/
globalStyle("::-webkit-search-decoration", {
  "@layer": {
    [reset]: {
      WebkitAppearance: "none",
    },
  },
});

/*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to `inherit` in Safari.
*/
globalStyle("::-webkit-file-upload-button", {
  "@layer": {
    [reset]: {
      WebkitAppearance: "button", // 1
      font: "inherit", // 2
    },
  },
});

/*
  Add the correct display in Chrome and Safari.
*/
globalStyle("summary", {
  "@layer": {
    [reset]: {
      display: "list-item",
    },
  },
});

/*
  Removes the default spacing and border for appropriate elements.
*/
globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  "@layer": {
    [reset]: {
      margin: 0,
    },
  },
});

globalStyle("fieldset", {
  "@layer": {
    [reset]: {
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle("legend", {
  "@layer": {
    [reset]: {
      padding: 0,
    },
  },
});

globalStyle("ol, ul, menu", {
  "@layer": {
    [reset]: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  },
});

/*
  Prevent resizing textareas horizontally by default.
*/
globalStyle("textarea", {
  "@layer": {
    [reset]: {
      resize: "vertical",
    },
  },
});

/*
  1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
  2. Set the default placeholder color to the user's configured gray 400 color.
*/

globalStyle("input::placeholder, textarea::placeholder", {
  "@layer": {
    [reset]: {
      opacity: 1, // 1
      color: "#9ca3af", // 2
    },
  },
});

/*
  Set the default cursor for buttons.
*/
globalStyle('button, [role="button"]', {
  "@layer": {
    [reset]: {
      cursor: "pointer",
    },
  },
});

/*
  Make sure disabled buttons don't get the pointer cursor.
*/
globalStyle(":disabled", {
  "@layer": {
    [reset]: {
      cursor: "default",
    },
  },
});

/*
  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
    This can trigger a poorly considered lint error in some tools but is included by design.
*/
globalStyle("img,svg,video,canvas,audio,iframe,embed,object", {
  "@layer": {
    [reset]: {
      display: "block", // 1
      verticalAlign: "middle", // 2
    },
  },
});

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

globalStyle("img, video", {
  "@layer": {
    [reset]: {
      maxWidth: "100%",
      height: "auto",
    },
  },
});

/* Make elements with the HTML hidden attribute stay hidden by default */
globalStyle("[hidden]", {
  "@layer": {
    [reset]: {
      display: "none",
    },
  },
});
