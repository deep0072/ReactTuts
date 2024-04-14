import React, { useMemo, useState } from "react";

// you have been given a list of items you shopped from the grocery store
// you need to calculate the amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    {
      name: "choco",
      value: 10,
    },
    { name: "chips", value: 5 },
    { name: "cookies", value: 50 },
    { name: "onion", value: 60 },
    { name: "tomato", value: 100 },
    { name: "tomato", value: 100 },
  ]);

  // first naive way
  //   let totalValue = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     totalValue += items[i].value;
  //   }

  // but we need to calculate only when items change

  const totalValue = useMemo(() => {
    let amount = 0;
    for (let i = 0; i < items.length; i++) {
      amount += items[i].value;
    }
    return amount
  }, [items]);
  return (
    <div>
      Assignment3
      <br />
      {items.map((item, index) => {
        return (
          <li key={index}>
            {" "}
            {item.name} - Price: {item.value}
          </li>
        );
      })}
      {totalValue}
    </div>
  );
};

export default Assignment3;
