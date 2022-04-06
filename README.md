# testwc

## Project setup

```
npm install
```

### Compiles and minifies for production

```
npm run build -- --target
wc --inline-vue --name modal-test
```

### Include in the head of the Html file

```
<script defer src="modal-test.min.js"></script>
```

### Add to the top of the .min.js file

```
const myComponentAttributes = [
  {
    key: "bg-color",
    value: "black",
    isEnabled: true,
  },
  {
    key: "color",
    value: "white",
    isEnabled: true,
  },
  {
    key: "orientation",
    value: "",
    isEnabled: false,
  },
  {
    key: "position-bottom",
    value: "",
    isEnabled: false,
  },
  {
    key: "position-top",
    value: "",
    isEnabled: false,
  },
  {
    key: "stars-number",
    value: "5",
    isEnabled: false,
  },
  {
    key: "sticker",
    value: "true",
    isEnabled: true,
  },
  {
    key: "sticker-text",
    value: "Votre avis",
    isEnabled: true,
  },
  {
    key: "study-id",
    value: "123",
    isEnabled: true,
  },
  {
    key: "trigger",
    value: "once",
    isEnabled: true,
  },
  {
    key: "trigger-delay",
    value: "5000",
    isEnabled: true,
  },
];

const myCustomElement = document.createElement("modal-test");
myComponentAttributes.forEach((attribute) => {
  if (attribute.isEnabled) {
    myCustomElement.setAttribute(attribute.key, attribute.value);
  }
});
document.body.appendChild(myCustomElement);
```

### Run your unit tests

```
npm run test:unit
```
