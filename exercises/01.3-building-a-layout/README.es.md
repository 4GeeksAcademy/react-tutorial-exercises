---
tutorial: "https://youtu.be/Yvu_4qjQEZA"
---

# `01.3` Building a layout

Practiquemos un poco más el uso del JSX para crear HTML.

Ahora tenemos otro objeto que es solo un poco más complejo que el anterior.
 
¿Estás listo? 😃

Tienes un objeto `data` que contiene la información de Bob Dylan (imagen, título, etc).

```js
const data = {
  image: "../../.learn/assets/Dylan.png?raw=true",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};
```

## 📝 Instrucciones:

1. Usa la información contenida en `data` para renderizar una tarjeta de bootstrap. Por ejemplo, el título de la tarjeta sería `data.cardTitle`, etc.

## 💻 Resultado esperado:
  
![Tarjeta de Bob Dylan](../../.learn/assets/1.4-1.png?raw=true)

## 💡 Pista:

+ Aquí está el código HTML para crear una tarjeta en bootstrap:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

Fuente: [Bootstrap Card](https://getbootstrap.com/docs/5.0/components/card/#example)

