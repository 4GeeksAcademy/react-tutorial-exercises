# `04.1` Renderizado condicional

Hagamos nuestro componente `<Alert>` un poco más inteligente.

Cuando usas JSX tienes todas las funcionalidades de JavaScript disponibles: Variables,Bucles, Condicionales, etc.

Ya hemos usado bucles y variables, ¡es momento de usar condicionales!

Por ejemplo, el siguiente código renderiza una alerta roja o naranja dependiendo de la propiedad `color`.

```jsx
const colorClasses = {
    'red': 'alert-danger',
    'orange': 'alert-warning'
}

<div class={`alert ${colorClasses[props.color]}`} role="alert">
  This is a primary alert-check it out!
</div>

```
Estamos declarando una variable `colorClasses` que contendrá todos los class names que se le aplicarán en la alerta.

# :speech_balloon: Instrucciones

Crea un componente `<Alert />` que renderice una [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples). El componente debe ser capaz de recibir las siguientes dos propiedades:

- Text (string): El texto mostrado en la alerta.
- Color (string): Rojo o naranja.

```jsx
//para el color rojo
<div class="alert alert-danger" role="alert">
  This is a primary alert—check it out!
</div>

//para el color amarillo
<div class="alert alert-warning" role="alert">
  This is a primary alert—check it out!
</div>
```