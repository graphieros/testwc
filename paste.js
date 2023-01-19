const myComponentAttributes = [
  {
    key: "button-position",
    value: "mr",
    isEnabled: true
  },
  {
    key: "button-size",
    value: 28,
    isEnabled: true,
  },
  {
    key: "disable-for-touch-screens",
    value: "true",
    isEnabled: true,
  },
  {
    key: "fixed-tools",
    value: "false",
    isEnabled: true,
  },
  {
    key: "font-family",
    value: "Helvetica",
    isEnabled: true,
  },
  {
    key: "hide-when-folded",
    value: "false",
    isEnabled: true,
  },
  {
    key: "iconColor",
    value: "#4A4A4A",
    isEnabled: true,
  },
  {
    key: "showPrint",
    value: "true",
    isEnabled: true,
  },
  {
    key: "show-tooltips",
    value: "true",
    isEnabled: true,
  },
  {
    key: "translationAutoOrientation",
    value: "auto print orientation",
    enbaled: true,
  },
  {
    key: "translationColor",
    value: "Color",
    enbaled: true,
  },
  {
    key: "translationColorAlpha",
    value: "Color alpha",
    enbaled: true,
  },
  {
    key: "translationDashedLines",
    value: "Dashed lines",
    enbaled: true,
  },
  {
    key: "translationFilled",
    value: "Filled",
    enbaled: true,
  },
  {
    key: "translationFontSize",
    value: "Font size",
    enbaled: true,
  },
  {
    key: "translationHdPrint",
    value: "hd print",
    enbaled: true,
  },
  {
    key: "translationThickness",
    value: "Thickness",
    enbaled: true,
  },
  {
    key: "translationTitle",
    value: "Annotations",
    enbaled: true,
  },
  {
    key: "translationTooltipGroup",
    value: "Select & Group",
    enbaled: true,
  },
  {
    key: "translationTooltipDelete",
    value: "Delete",
    enbaled: true,
  },
  {
    key: "translationTooltipMove",
    value: "Move",
    enbaled: true,
  },
  {
    key: "translationTooltipResize",
    value: "Resize",
    enbaled: true,
  },
  {
    key: "translationTooltipBringToFront",
    value: "Bring to front",
    enbaled: true,
  },
  {
    key: "translationTooltipBringToBack",
    value: "Bring to back",
    enbaled: true,
  },
  {
    key: "translationTooltipDuplicate",
    value: "Duplicate",
    enbaled: true,
  },
  {
    key: "translationTooltipRedo",
    value: "Redo last shape",
    enbaled: true,
  },
  {
    key: "translationTooltipUndo",
    value: "Undo last shape",
    enbaled: true,
  },
  {
    key: "translationTooltipUngroup",
    value: "Ungroup",
    enbaled: true,
  },
  {
    key: "translationTooltipPdf",
    value: "Save pdf",
    enbaled: true,
  },
  
];

const myCustomElement = document.createElement("svg-annotator");
myComponentAttributes.forEach((attribute) => {
  if (attribute.isEnabled) {
    myCustomElement.setAttribute(attribute.key, attribute.value);
  }
});
document.body.appendChild(myCustomElement);
