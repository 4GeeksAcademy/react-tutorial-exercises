# `03.2` Un componente real

En el ejericio anterior hemos creado nuestro primer componente llamado **PrintHello** y hemos aprendido que podemos usar el componente como una etiqueta HTML.
```jsx
<PrintHello />
```

Ahora, vamos a crear un nuevo componente (función) llamado **"Card"** que generará el siguiente HTML:

```jsx
<div class="card m-5">
  <img class="card-img-top" src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Bob Dylan</h5>
    <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```

:point_up: Este código HTML está basado en la [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/).

# :speech_balloon: Instrucciones

Por favor, crea una función llamada BootstrapCard que devolverá el código de la card y usará la función ReactDOM.render `<BootstrapCard />` para añadirlo dentro del sitio web, dentro de `#myDiv` usando la función ReactDOM.render.

Nota: Si no sabes o no recuerdas cómo usar `ReactDOM.render`, puedes revisar los ejercicios anteriores.
