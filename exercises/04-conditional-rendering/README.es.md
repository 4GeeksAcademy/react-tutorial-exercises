# `04` Renderizado condicional

También puedes usar las propiedades de un componente para cambiar su comportamiento, como mostrar u ocultar `<Alert />` según una propiedad llamada `show`.

```jsx
{/* This will make your alert show */}
<Alert text="Are you sure?" show={true}>

{/* This will make your alert to be hidden */}
<Alert text="Are you sure?" show={false}>
```

Podemos lograrlo incorporando un `if... else...` dentro del método render como aquí:

```jsx
const Alert = (props) => {
    if(props.show === false){
        return null;
    }
    else{
        // return here the component html
    }
};
```

 :point_up: Devolver distinto código HTML según ciertas condiciones es llamado formalmente [renderizado condicional rendering](https://joshblog.net/2018/conditional-rendering-with-react-and-jsx/).

# :speech_balloon: Instrucciones

Crea un componente `<Alert />` que renderice una [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples).
El componente debe ser capaz de recibir las siguientes dos propiedades:
- show (bool): True or false.
- text (string): El mensaje a incluir dentro del mensaje del alert