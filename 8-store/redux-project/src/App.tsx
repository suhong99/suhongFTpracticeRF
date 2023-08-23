import "./App.css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  return (
    <>
      <div>
        {/* Clicked :{value} times */}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </>
  );
}

export default App;
