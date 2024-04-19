# React App with Recoil

This project showcases a simple React application leveraging the Recoil library for state management. It demonstrates the use of Recoil's core concepts such as atoms, selectors, `useRecoilValue`, and `useSetRecoilState` to manage and display dynamic notification counts.

## Core Concepts in Recoil

- **Atoms**: The smallest building blocks of Recoil state. They represent a piece of state in the application. In this project, `notificationsAtom` is used to store and manage notification data.

- **Selectors**: Derived state based on the value of one or more atoms or other selectors. They allow for more complex state logic. `notificationsSelector` is used to derive the total count of notifications.

- **useRecoilValue**: A hook that subscribes a component to a piece of state. It causes the component to re-render when the state changes. In this app, it's used to read the state of `notificationsAtom` and `notificationsSelector`.

- **useSetRecoilState**: A hook that returns a setter function to update the state of an atom. It's used to update the state of `notificationsAtom` based on fetched data.

## Features

- **Dynamic Notification Counts**: Displays dynamic counts for various notification categories (Home, My Network, Jobs, Messaging, Notifications, and Me) using Recoil atoms and selectors.

- **Conditional Rendering**: Implements conditional rendering for counts over 100, enhancing the user interface.



## Built With

- [React](https://reactjs.org/)
- [Recoil](https://recoiljs.org/)
- [Axios](https://axios-http.com/)

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
