import { Avatar } from "./props";

const mytheme = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function Profile() {
  return (
    <div style={mytheme.theme}>
      <h1>{mytheme.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

      <Avatar
        person={{
          name: "Lin",
          imgSrc: "https://i.imgur.com/1bX5QH6.jpg",
        }}
        size={100}
      />

      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imgSrc: "https://i.imgur.com/7vQD0fPs.jpg",
        }}
      />

      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imgSrc: "https://i.imgur.com/7vQD0fPs.jpg",
        }}
      />
    </div>
  );
}
