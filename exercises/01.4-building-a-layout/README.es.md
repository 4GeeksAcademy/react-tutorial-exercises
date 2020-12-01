# `01.4` Construyendo un layout(diseño)

Practiquemos un poco más acerca de usar JSX para crear HTML.

Ahora tenemos otro objeto que es solo un poco más complejo que el anterior.

# :speech_balloon: Instrucciones

Tienes un objeto `data` que contiene la información de Bob Dylan (imagen, título, etc).

```js
const data = {
  image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};
```

Usa esa información contenida en `data` para renderizar una tarjeta bootstrap, por ejemplo: El título de la tarjeta sería el `data.cardTitle`, etc.

Aquí está el código HTML para crear una tarjeta en bootstrap:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
````
Fuente: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### Así es como debería verse el resultado final:

![Bob Dylan Card](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/1.4-1.png?raw=true)

