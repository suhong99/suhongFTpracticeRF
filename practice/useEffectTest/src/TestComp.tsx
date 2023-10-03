import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const TestComp = () => {
  const [update, setUpdate] = useState(true);

  console.log('유즈이펙트 위에 있는 콘솔');

  useEffect(() => {
    console.log('셋업코드 업데이트 있는 애');
    return () => {
      console.log('클린업코드 업데이트 있는 애');
    };
  }, [update]);

  useEffect(() => {
    console.log('셋업코드 업데이트 없는 애');
    return () => {
      console.log('클린업코드 업데이트 없는 애');
    };
  }, []);

  console.log('유즈이펙트 아래에 있는 콘솔');
  return (
    <div
      onClick={() => {
        setUpdate(!update);
      }}
      style={{ cursor: 'pointer' }}
    >
      이걸로 유즈 이펙트를 테스트하겠습니다. {update ? '비트' : '리액트'}
      <div>
        <span>
          {update ? (
            <img src={viteLogo} className="logo" alt="Vite logo" />
          ) : (
            <img src={reactLogo} className="logo react" alt="React logo" />
          )}
        </span>
      </div>
    </div>
  );
};

export default TestComp;
