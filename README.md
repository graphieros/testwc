# svg-annotator web component

A web component to select any area on a web page, annotate it and save the result to pdf.

Features:

- adds a button on the page, to enable the selection and annotation of its content
- after selecting by dragging the mouse, a modal will display a canvas copy of the selection area, along with annotation tools
- generate a pdf of the annotated content


Annotation tools:

- create shapes (rectangle, circle, arrow)
- freehand drawing
- add text (includes bullet points mode)
- select, move, resize, copy paste, delete, group & ungroup, redo shapes
- save to pdf (uses html2canvas & jspdf as dependencies)
- choose printing orientation
- choose hd or low def print

## Project setup

```
npm i wc-svg-annotator
```

Place the web component on the desired page:

```
<html>
  <!-- your content -->
  <svg-annotator />
</html>
```

## Props


| Prop | Description | Default | Options |
| ---- | ----------- | ------- | ------- |
| button-position | Placement of the fixed starter button on the page | "mr" (middle right) | "tr", "mr", "br", "tl", "ml", "bl" |
| button-size | Size of the annotation toolbar buttons | 28 | - |
| font-family | Font family of the annotator | "Helvetica" | - |
| icon-color | Color of the icons and borders of the annotator buttons | "#4a4a4a" | - |
| show-print | Enable / Disable pdf functionality | true | true, false |
| show-tooltips | Show / Hide tooltips | true | true, false |
| translation-color | Label for the color picker input | "Color" | - |
| translation-color-alpha | Label for the color alpha slider input | "Color alpha" | - |
| translation-dashed-lines | Label for the dashed lines checkbox | "Dashed lines" | - |
| translation-filled | Label for the filled shape checkbox | "Filled" | - |
| translation-hd-print | Label for the hd print checkbox | "hd print" | - |
| translation-font-size | Label for the font size input | "Font size" | - |
| translation-thickness | Label for the line thickness input | "Thickness" | - |
| translation-title | Title of the annotator summary | "Annotations" | - |
| translation-tooltip-group | Tooltip for the group button | "Select & Group" | - |
| translation-tooltip-delete | Tooltip for the delete button | "Delete" | - |
| translation-tooltip-move | Tooltip for the move button | "Move" | - |
| translation-tooltip-resize | Tooltip for the resize button | "Resize" | - |
| translation-tooltip-bring-to-front | Tooltip for the bring to front button | "Bring to front" | - |
| translation-tooltip-bring-to-back | Tooltip for the bring to back button | "Bring to back" | - |
| translation-tooltip-duplicate | Tooltip for the duplicate button | "Duplicate" | - |
| translation-tooltip-redo | Tooltip for the redo button | "Redo last shape" | - |
| translation-tooltip-undo | Tooltip for the undo button | "Undo last shape" | - |
| translation-tooltip-ungroup | Tooltip for the ungroup button | "Ungroup" | - |
| translation-tooltip-pdf | Tooltip for the save pdf button | "Save pdf" | - |


Here is the syntax to use all the props in your HTML.
If you don't add props, these will be used by default:

```
<html>
  <svg-annotator
    button-position="mr"
    button-size="28"
    font-family="Helvetica"
    icon-color="#4a4a4a"
    show-print="true"
    show-tooltips="true"
    translation-color="Color"
    translation-color-alpha="Color alpha"
    translation-dashed-lines="Dashed lines"
    translation-filled="Filled"
    translation-font-size="Font size"
    translation-hd-print="hd print"
    translation-thickness="Thickness"
    translation-title="Annotations"
    translation-tooltip-group="Select & Group"
    translation-tooltip-delete="Delete"
    translation-tooltip-move="Move"
    translation-tooltip-resize="Resize"
    translation-tooltip-bring-to-front="Bring to front"
    translation-tooltip-bring-to-back="Bring to back"
    translation-tooltip-duplicate="Duplicate"
    translation-tooltip-redo="Redo last shape"
    translation-tooltip-undo="Undo last shape"
    translation-tooltip-ungroup="Ungroup"
    translation-tooltip-pdf="Save pdf"
  />
</html>
```

## Known html2canvas & jspdf issues

- some fonts and css attributes are not supported, which could lead to an offset between the selected area and the canvas generated in the modal 