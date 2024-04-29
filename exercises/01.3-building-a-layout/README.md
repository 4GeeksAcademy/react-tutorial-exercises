---
tutorial: "https://www.youtube.com/watch?v=ZRmtR2Gp-z0"
---

# `01.3` Building a layout

Let's practice a little bit more about using JSX for creating HTML.

Now we have another object that's a bit more complex than the last one.

Are you ready? 😃

You have a `data` object that contains Bob Dylan's information (image, title, etc).

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

## 📝 Instructions:

1. Use the information contained in `data` to render a bootstrap card. For example: The card's title will be `data.cardTitle`, etc.

## 💻 Expected result:
  
![Bob Dylan Card](../../.learn/assets/1.4-1.png?raw=true)

## 💡 Hint:

+ Here is the HTML code for creating a card in bootstrap:

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

Source: [Bootstrap Card](https://getbootstrap.com/docs/5.0/components/card/#example)




