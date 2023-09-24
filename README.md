# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# React Concepts: Mounting, Rendering, and useEffect



## Mounting

Mounting is the process of creating an instance of a component and inserting it into the DOM. During mounting, the constructor is called, the render method creates a virtual DOM, and the `componentDidMount` lifecycle method is executed.

## Rendering

Rendering is the process of creating a virtual DOM based on the current state and props of a component. The render method is responsible for generating this virtual DOM and is called whenever there is a change in state or props.

## useEffect

The `useEffect` hook allows you to perform side effects in functional components. It runs after every render by default, but you can control when it executes by providing a dependency array. If the array is empty, the effect runs only once after the initial render.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When toggling a value that conditionally renders a component, the `useEffect` hook runs when the value is set to `true` (component mounts) and the cleanup function, if provided, runs when the value is set to `false` (component unmounts).

