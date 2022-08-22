# `07` Styles Object

Los inline stylings (estilos en línea) en react funcionan un poco diferentes, tenemos que usar un objeto con los styles (estilos) que queremos aplicarle al tag. Sabiendo esto, tenemos dos formas de aplicar inline styles en react:

+ Declarando una variable que tendrá el objeto con los styles.

+ Asignar el objeto directamente al style tag.

En este ejercicio, vamos a utilizar el primero. La sintaxis se ve así:

```jsx
const styleObject = {
    color: "black",
    width: "100%",
    backgroundColor: "blue",
    marginTop: "2.5rem"
}

const output = (
    <div style={styling}>
        Hello World!
    </div>
)
```

Si le das `build` al código actual, verás que faltan muchos styles.

De todos modos, creamos dos variables con los stylings de la tarjeta y la imagen. Así que solo tienes que aplicarlo.

## 📝 Instrucciones:

1. Usa las variables `cardStyles` e `imageStyles` para aplicar los estilos a los elementos `#card` y `#card-image`.

## 💡 Pistas:

+ Recuerda la sintaxis para aplicar styles en react: `style={styleObject}`.

+ Aquí hay más información sobre los stylings de react: [https://www.w3schools.com/react/react_css.asp](https://www.w3schools.com/react/react_css.asp)