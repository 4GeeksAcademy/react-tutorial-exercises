---
tutorial: "https://www.youtube.com/watch?v=80_k11tqhrE"
---

# `03.5` Alert Component

# :speech_balloon: Instructions

Based on the knowledge that you now have, please create an `<Alert />` component that receives 1 prop "text: Proptype.string" and renders a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples) like the following:

This is how the component will be used:
```jsx
<Alert text="OMG! Something really bad has happended!" />
```
This is What the component should output as HTML:

```html
<div class="alert alert-danger" role="alert">
  OMG! Something really bad has happended!
</div>
```