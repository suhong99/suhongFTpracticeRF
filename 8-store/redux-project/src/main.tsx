import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Middleware, applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(document.getElementById('root')!);

// console.log("store.getState", store.getState());

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('store', store);
  console.log('action', action);
  next(action);
};

const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(rootReducer, middleware);

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
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
