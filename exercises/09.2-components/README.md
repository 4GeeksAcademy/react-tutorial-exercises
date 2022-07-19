# `09.2` Components

In the previous exercise you learned about components, and now that you know their structure, we are going to ask you to create your component with the data given.

## 📝 Instructions:

1. Create a component named `<Product />` with the following JSX code:

```jsx
<div className="col-3 mx-auto mt-5 rounded border">
    <img
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
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

## 💡 Hints:

+ You have to use the previous JSX in the return of the component.

+ You can go to the previous exercise if you don't remember about components structure.

+ Here is more information about react components: [React Components](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)