import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const submitData = (event) => {
    event.preventDefault();
    const newItem = { id: uuidv4(), title: name };
    setList([...list, newItem]);
    setName("");
  };
  return (
    <section className="container">
      <h1>TodoList App</h1>
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(event) => setName(event.target.value)}
            value={name}
          ></input>
          <button type="submit" className="submit-btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
