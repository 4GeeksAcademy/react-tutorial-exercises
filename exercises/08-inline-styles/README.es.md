# `08` Inline Styles

En el ejercicio anterior, aprendimos sobre los inline stylings que almacenan el objeto del style en una variable y luego lo usan como el valor de la propiedad `style`.

Ahora vamos a crear el objeto directamente como el valor de la propiedad `style`. La sintaxis se ve así:

```jsx
const output = (
    <div style={{ color: "black", width: "100%", backgroundColor: "blue", marginTop: "2.5rem"}}>
        Hello World!
    </div>
)
```

Tenemos dos corchetes `style={{}}`, porque el externo es para acceder a javascript y los internos son del objeto.

Si le das `build` al código actual, verás que faltan muchos styles.

En este caso, aplicarás los styles al tag `div` de la tarjeta.

## 📝 Instrucciones:

1. Agrega los siguientes styles al objeto del valor de la propiedad `style` del `div` de la tarjeta:

    + Un width (ancho) de `"16.66%"`. 

    + Margin (margen) `"auto"` para centrarlo.

    + Margin superior de `"2.5rem"`.

    + Un borde sólido con 1px de width y color lightgrey (gris claro) `"1px solid lightgrey"`  

## 💡 Pistas:

+ Recuerda la sintaxis para aplicar styles en react: `style={{style1: "value of style", style2: "value of style 2"}}`.

+ Aquí hay más información sobre los stylings de react: [https://www.w3schools.com/react/react_css.asp](https://www.w3schools.com/react/react_css.asp)