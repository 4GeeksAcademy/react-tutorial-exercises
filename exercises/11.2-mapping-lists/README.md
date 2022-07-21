# `11.2` Mapping Lists

The `products` variable is an array of objects which each object will have the content of a product.

## 📝 Instructions:

1. Loop through the `products` variable to generate a card for each of the products by using the map method.

2. Use this code for the card JSX:

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

## 💡 Hint:

+ Remember to use the `key` prop in the parent element of the map JSX.