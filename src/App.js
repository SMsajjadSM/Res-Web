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
  return (
    <div className="add-form">
      <p> What do you nedd for your 😍 trip</p>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list, and you already packed x (x%)</em>{" "}
    </footer>
  );
}
