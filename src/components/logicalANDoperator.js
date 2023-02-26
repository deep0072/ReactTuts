function Item({ isPacked, name }) {
  let itemName = name;
  if (isPacked) {
    itemName = name + "✔";
  }
  return <li className="item">{itemName}</li>;
}

export function LogicalPackingList() {
  return (
    <div>
      <h1>
        --------------------------logical operator rendering examples are given
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
