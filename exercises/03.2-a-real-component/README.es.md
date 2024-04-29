---
tutorial: "https://youtu.be/iXSBNgZTTFc"
---


# `03.2`  A real component


En el ejercicio anterior hemos creado nuestro primer componente llamado `PrintHello`, y hemos aprendido que podemos usar el componente como una etiqueta HTML.

```jsx
<PrintHello />
```

Ahora, vamos a crear un nuevo componente (función) llamado `<BootstrapCard />` que generará el siguiente HTML:

```jsx
<div class="card m-5">
  <img class="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Bob Dylan</h5>
    <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```
> ☝ Nota: Este código HTML está basado en la [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/).

## 📝 Instrucciones:

1. Por favor, crea una función llamada `BootstrapCard` que devuelva el código de la card y usa la función `ReactDOM.render` para añadir `<BootstrapCard />` dentro del sitio web, dentro de `#myDiv`.

## 💡 Pistas:

+  Si no sabes o no recuerdas cómo usar `ReactDOM.render`, puedes revisar los ejercicios anteriores.

+  Recuerda usar la sintaxis de React correcta `className` en vez de `class` cuando crees tu tarjeta de bootstrap.
