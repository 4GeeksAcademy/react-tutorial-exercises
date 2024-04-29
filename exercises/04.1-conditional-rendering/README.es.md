---
tutorial: "https://youtu.be/myK-x2eBPbI"
---


# `04.1` Conditional Rendering

Hagamos nuestro componente `<Alert />` un poco más inteligente.

Cuando usas JSX tienes todas las funcionalidades de JavaScript disponibles: Variables, Bucles, Condicionales, etc.

Por ejemplo, el siguiente código renderiza una alerta roja o amarilla dependiendo de la propiedad `color`.

```jsx
const colorClasses = {
    'red': 'alert-danger',
    'yellow': 'alert-warning'
}

<div class={`alert ${colorClasses[props.color]}`} role="alert">
  This is an alert - check it out!
</div>
```

Estamos declarando una variable `colorClasses` que contendrá todos los class names que se le aplicarán en la alerta.

##  📝 Instrucciones:

1. Crea un componente `<Alert />` que cambie de color cuando se modifique la propiedad `color` siguiendo los [colores de las alertas de bootstrap](https://getbootstrap.com/docs/5.0/components/alerts/#examples).

## 💡 Pista: 

El componente debe ser capaz de recibir las siguientes dos propiedades:

+ `text` (string): El texto mostrado en la alerta.

+ `color` (string): El color red o yellow.

```jsx
{/* Para el color rojo */}
<div class="alert alert-danger" role="alert">
  This is a danger alert - check it out!
</div>

{/* Para el color amarillo */}
<div class="alert alert-warning" role="alert">
  This is a warning alert - check it out!
</div>
```
