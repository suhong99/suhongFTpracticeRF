import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root")!);

store.dispatch({
  type: "ADD_TODO",
  text: "USE REDUX",
});
console.log("store.getState", store.getState());

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );

// error

// const render = () =>
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <App
//         value={store.getState()}
//         onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//         onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//       />
//     </React.StrictMode>
//   );

render();
store.subscribe(render);
