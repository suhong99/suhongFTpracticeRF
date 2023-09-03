import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="App"
        onClick={() => {
          navigate('/payment');
        }}
      >
        <span>결제하러가기</span>
      </div>
    </>
  );
}

export default App;
