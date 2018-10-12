# `02.3` Component Properties

Your bootstrap card right is [hard coded](https://www.quora.com/What-does-hard-coded-something-mean-in-computer-programming-context) for **Bob Dylan**. What if we also what to use the `<BootstrapCard />` component for **Paul Mccartney**

## Using properties in HTML

When you are coding HTML you are constantly using the `<tag>` properties to modify the tag behavior, e.g.:  
When you use the **anchor** tag (`<a>`) you have to specify the **href** propery like this:

```html
<a href="http://google.com">Take me to google</a>
```

## Using properties in React.js

In React js we also can create our own tags and use our own invented properties, for example we could specify the `title` property of our `<BootstrapCard />` like this:

```jsx
//for Paul Mccartney
<BootstrapCard title="Paul Mccartney" />

//for Bob Dylan
<BootstrapCard title="Bob Dylan" />
```

Our component function will receive there title property thru the first parameter of the function like this:

```jsx
const BootstrapCard = (property) => {
  return <div class="card">
    <img class="card-img-top" src="/asset/01.4-bobdylan-postcard.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{property.title}</h5>
      <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
    </div>
  </div>;
}
```

# :speech_balloon: Instructions

Please add the `imageUrl`, `description`, `buttonUrl` and `buttonLabel` inside the **BootstrapCard** function and on the `<BootstrapCard />`, the same way title was already included in both.