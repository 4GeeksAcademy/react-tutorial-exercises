# `05.1` Using Variables

Una de las ventajas de usar JSX es que podemos integrar Javascript y HTML en un solo archivo, lo que nos permite usar variables, funciones y más, dentro de nuestro código HTML.

Esto es parte de lo que hace que JSX sea tan especial, ¡nunca fue tan fácil y rápido agregar funcionalidades a nuestro sitio web!

Si quieres utilizar variables en tu JSX, solo tienes que agregar el nombre de la variable entre corchetes `{}` así: `{variable}`.

Todos juntos se pueden usar así:

```jsx
let name = "Joe"

let output = (
    <div>
        Hello my name is {name}
    <div>
)
```

*- Ten en cuenta que estamos usando el nombre de la variable dentro de `div` para mostrar "Joe"*.

Y el resultado se verá así:

![Result of Previous Example](../../.learn/assets/05-using-variables.png)

Si construyes el código que tienes en el archivo `app.jsx`, mostrará Hello World!.

## 📝 Instrucciones:

1. Cambia el código dado para mostrar `"Hello John Doe!"` en lugar de `"Hello World!"` utilizando las variables.

## 💡 Pistas:

+ Es importante que uses las variables para ello, en lugar de codificarlo.

+ Agregar el espacio entre las variables es muy fácil, así: `{var1} {var2}` (observa el espacio entre ellas).