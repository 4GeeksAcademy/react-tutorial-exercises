# `04` Conditional Rendering

También puedes usar las propiedades de un componente para cambiar su comportamiento como mostrar u ocultar `<Alert />`, según una propiedad llamada `show`.

```jsx
/* Esto hará que tu alerta se muestre */
<Alert text="Are you sure?" show={true}>

/* Esto hará que tu alerta se oculte */
<Alert text="Are you sure?" show={false}>
```

Podemos lograrlo incorporando un `if...else` dentro del método render como aquí:

```jsx
const Alert = (props) => {
    if(props.show === false){
        return null;
    }
    else{
        // retorna aquí el componente html
    }
};
```

Nota: ☝️ Devolver distinto código HTML según ciertas condiciones es llamado formalmente [renderizado condicional](https://react.dev/learn/conditional-rendering).

## 📝 Instrucciones:

1. Crea un componente `<Alert />` que renderice una [bootstrap alert](https://getbootstrap.com/docs/5.0/components/alerts/#examples).

## 💡 Pista:

El componente debe ser capaz de recibir las siguientes dos propiedades:

+ `show` (boolean): true o false.

+ `text` (string): El mensaje a incluir dentro del mensaje del `<Alert />`.
