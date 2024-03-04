import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🎒 FAR AWAY 🌴</h1>;
}
function Form() {
  const [descrip, setdecrip] = useState("");
  const [quan, setquan] = useState(1);
  function submitHandler(e) {
    e.preventDefault();
    if (!descrip) return;
    const neweItem = { descrip, quan, packed: false, id: Date.now() };
    setdecrip("");
    setquan(1);
  }
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3> What do you nedd for your 😍 trip</h3>
      <select
        value={quan}
        onChange={(e) => {
          setquan(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={descrip}
        onChange={(e) => {
          setdecrip(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span>{item.quantity}</span> {item.description}
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list, and you already packed x (x%)</em>{" "}
    </footer>
  );
}
