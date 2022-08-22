# `06` Accesing Object Values

Puedes tener variables con valores simples como una string o un número, pero también puedes tener tipos de datos más complejos como arrays u objetos.

En este ejercicio vamos a utilizar un objeto el cual tendrá los datos de un producto que queremos vender, para mostrar una ficha con los datos del usuario tendremos que utilizar ese objeto.

## 📝 Instrucciones:

1. Utiliza los datos de la variable denominada `product` para completar la información de la tarjeta.

## 💡 Pista:

+ El tag `<a>` funcionará como el botón.

+ Para los valores de los botones, tendrás que acceder a un objeto dentro de otro objeto. Mira la estructura de la variable `output`.

+ Así es como accedes a objetos dentro de otro objeto:

```js
let obj = {
    prop1: "Any value",
    nestedObj: {
        prop2: "Second prop",
        prop3: "This property is inside of nestedObj which is inside of obj"
    }
}

console.log(obj.nestedObj.prop2); // Esto devolvería: Segunda propiedad
```