import React from "./Todos.module.scss";

const Todos = () => {
  return <div>Todos</div>;
  <section>
    <h2>Todos</h2>
    <ul>
      {data.map((item, idx) => (
        <li key={idx}>
          <p>{item.todo}</p>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  </section>;
};

export default Todos;
