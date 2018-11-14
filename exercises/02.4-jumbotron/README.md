# `02.4` Jumbotron

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
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```

#### :bulb: Hint
Remember to use prop-types to validate your component properties.

This is how your website should look like in the end.

![Jumbotron](https://ucarecdn.com/d376101b-6af1-45cb-97fc-ee246ee312d3/)
