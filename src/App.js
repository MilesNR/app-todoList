import "./App.css";

function App() {
  return (
    <section className="container">
      <h1>TodoList App</h1>
      <form className="group">
        <div className="form-control">
          <input type="text" className="text-input"></input>
          <button type="submit" className="submit-btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
