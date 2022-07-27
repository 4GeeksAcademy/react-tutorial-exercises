# `11.2` Mapping Lists

La variable `products` es un array de objetos, cada uno de los cuales tendrá el contenido de un producto.

## 📝 Instrucciones:

1. Haz loop a través la variable `products` para generar una tarjeta para cada uno de los productos utilizando el método map.

2. Utiliza este código para la tarjeta JSX:

```jsx
<div className="col-2 mx-3 rounded border">
    <img src={product.image} alt="Wrong Image!" className="w-100 h-50" style={{ objectFit: "cover" }} />
    <div className="col-12 p-3">
        <h5>{product.name}</h5>
        <span className="text-secondary">{product.type}</span>
        <p>$ {product.price}</p>
    </div>
</div>
```

## 💡 Pista:

+ Recuerda usar la propiedad `key` en el elemento principal del map JSX.