// 동기와 비동기'

//콜백패턴

const a = () => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
};
const b = () => console.log(2);

a();
b();

// 2 1
