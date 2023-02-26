function Item({ isPacked, name }) {
  return (
    <li className="item">{isPacked ? <del> {name + " ✔"}</del> : name} </li>
  );
}

export function PackingList() {
  return (
    <div>
      <h1>
        --------------------------conditional rendering examples are given
        below-------------------------
      </h1>
      <h2>Sally Ride's Packing List</h2>

      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </div>
  );
}
