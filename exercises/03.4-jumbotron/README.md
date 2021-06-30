---
tutorial: "https://www.youtube.com/watch?v=zv6HPveyz6g"
---

# `03.4` Jumbotron

# :speech_balloon: Instructions

Using everything you've learned, build a Jumbotron component that receives the following properties:

```jsx
<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>
```

Your component should output HTML code similar to this:

```html
<div class="jumbotron m-5">
  <h1 class="display-4">Welcome to react</h1>
  <p class="lead">React is the most popular rendering library in the world</p>
  <a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
</div>
```

#### :bulb: Hint
Remember to use prop-types to validate your component properties.

This is how your website should look like in the end.

![Jumbotron](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/03.4-1.png?raw=true)