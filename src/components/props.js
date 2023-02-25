export function Avatar({ person, name }) {
  console.log(person.imgSrc);
  return (
    <img
      className="avatar"
      src={person.imgSrc}
      alt={person.name}
      width={person.size}
      height={person.size}
    ></img>
  );
}
