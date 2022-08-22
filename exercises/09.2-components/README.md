# `09.2` Components

En el ejercicio anterior aprendiste sobre los componentes, y ahora que conoces su estructura, te vamos a pedir que crees tu componente con los datos dados.

## 📝 Instrucciones:

1. Crea un componente llamado `<Product />` con el siguiente código JSX:

```jsx
<div className="col-3 mx-auto mt-5 rounded border">
    <img
        src="../../.learn/assets/09.2-components.jfif"
        alt="Wrong Image!"
        className="img-fluid w-100"
    />
    <div className="col-12 p-3">
        <h5>Tesla Model S</h5>
        <p>Range (EPA est.): 396 mi</p>
        <p>0-60 mph: 1.99s</p>
        <p>Top Speed: 200 mph</p>
        <p>Peak Power: 1,020 hp</p>
        <a href="https://www.tesla.com/models/design#overview" className="w-100 btn btn-dark" target="_blank">
            Order now
        </a>
    </div>
</div>
```

## 💡 Pistas:

+ Tienes que usar el JSX anterior en la devolución del componente.

+ Puedes ir al ejercicio anterior si no recuerda la estructura del componente.

+ Aquí hay más información sobre los componentes de react: [React Components](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)