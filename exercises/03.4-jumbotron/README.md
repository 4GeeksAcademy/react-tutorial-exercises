---
tutorial: 'https://www.youtube.com/watch?v=zv6HPveyz6g'
---

# `03.4` Hero Component

Using everything you have learned so far...

## 📝 Instructions:

1. Build a `HeroSection` component that receives the following properties:

```jsx
<HeroSection
  title="Welcome to React!"
  description="React is the most popular rendering library in the world"
  buttonLabel="Go to the official website"
  buttonURL="https://reactjs.org/"
/>
```

## 💻 Expected result:

![HeroSection](../../.learn/assets/03.4-1.png?raw=true)

## 💡 Hints:

- Remember to use prop-types to validate your component properties.

- Your HTML's component should be something like this:

```html
<div class="bg-light p-5 m-5">
  <h1 class="display-4">Welcome to React!</h1>
  <p class="lead">React is the most popular rendering library in the world</p>
  <a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button"
    >Go to the official website</a
  >
</div>
```
