# `03.5` Componente Alert

# :speech_balloon: Instrucciones

Basándote en el conocimiento que ahora tienes, por favor, crea un componente `<Alert />` que reciba 1 prop "text: Proptype.string" y renderiza una [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples) como la siguiente:

Así es como deberías usar el componente:
```jsx
<Alert text="OMG! Something really bad has happended!" />
```
Esto es lo que el componente debería generar en el HTML:

```html
<div class="alert alert-danger" role="alert">
  OMG! Something really bad has happended!
</div>
```