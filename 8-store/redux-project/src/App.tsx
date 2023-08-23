import { useState } from "react";
import "./App.css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue("");
  };
  return (
    <>
      <div>
        {/* Clicked :{value} times */}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <form onSubmit={addTodo}>
          <input type="text" value={todoValue} onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
