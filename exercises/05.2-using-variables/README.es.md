# `05.2` Using Variables

En la lección anterior, aprendimos cómo usar variables dentro de nuestros tags, ahora vamos a usar variables como el valor de las propiedades de nuestras etiquetas.

## Ejemplo:

Podemos obtener el enlace de un tag `<a>` de una variable y usarlo. Por ejemplo:

```jsx
let link = "https://www.google.com/";

let output (
    <div>
        <a href={link}>Let's go to google!</a>
    </div>
)
```

Entonces, básicamente usará el valor de la variable como el href del tag `<a>`.

## 📝 Instrucciones:

1. Utiliza la variable `imageSrc` como el valor `src` del tag `<img>` para mostrar la imagen correctamente.

## 💡 Pistas:

+ Es importante que uses la variable para ello, en lugar de codificar el enlace.

+ Antes tenía que usar comillas (`""`) para el valor `src`, ahora no tienes que usarlas porque la variable ya es una string (cadena), por lo que tiene sus propias comillas.