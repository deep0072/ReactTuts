function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

const people = [
  {
    id: 0, //used as key in jsx
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, //used as key in jsx
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, //used as key in jsx
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, //used as key in jsx
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, //used as key in jsx
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export function FunctionList() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const chemistInfo = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name}></img>
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + `known for its ${person.accomplishment}`}
      </p>
    </li>
  ));
  return (
    <div>
      <h1>
        ----------------- rendering list examples are given below
        -----------------
      </h1>

      <h2>{chemistInfo}</h2>
    </div>
  );
}
