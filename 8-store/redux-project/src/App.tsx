/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import axios from 'axios';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const posts = useSelector((state: RootState) => state.posts);
  const [todoValue, setTodoValue] = useState<string>('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchPosts = (): any => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return async function fetchPostsThunk(dispatch: any, getState: any) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue });

    setTodoValue('');
  };
  return (
    <>
      <div>
        Clicked :{counter} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <ul>
          {todos.map((todos, index) => (
            <li key={index}>{todos}</li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input type="text" value={todoValue} onChange={handleChange} />
          <input type="submit" />
        </form>
        <ul>
          {posts.map((post, index: number) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
