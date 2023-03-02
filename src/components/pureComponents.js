/**
 * pure components basically pure functions that do not changes varibale globally.
 *
 * only those variable changes which is define locally. this is also called local mutation
 *
 *
 */

function Cup({ guest }) {
  return (
    <div>
      <li> tea cup for {guest} </li>
    </div>
  );
}

export function PureFunction() {
  const cup = [];
  for (let i = 1; i <= 12; i++) {
    cup.push(<Cup key={i} guest={i}></Cup>);
  }
  return cup;
}
