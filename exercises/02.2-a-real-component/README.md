# `02.2` A real component

Everything on web development is becoming "component driven", there are [Bootstrap components](https://getbootstrap.com/docs/4.0/components/buttons/), [jQuery Components](https://jqueryui.com/), etc.

Lets grab the typical code for a Bootstrap Card Component (like the one we used on `01.4`) and make it a React.js component that we can reuse.

Here is the code for a bootstrap card:

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

# :speech_balloon: Instructions

Please create a function called BootstrapCard that returns the card code and use the ReactDOM.render function `<BootstrapCard />` to add it into the website inside `#myDiv`.

Note: if you don't know or remember how to use `ReactDOM.render` you can review the past exercises.
