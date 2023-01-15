import './App.css';
import Input from './components/Input';
import { useState } from 'react';

// TODOLIST
// 1. input area, todolist area.
// 2. 인풋창 입력 -> 버튼 -> 투두리스트로 출력.
// 3. 투두리스트 진행/완료 간 스위치 가능, 삭제 가능.

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: '',
  //     title: '',
  //     contents: '',
  //     isDone: false,
  //   },
  // ]);
  return (
    <>
      <header className="header">TODOLIST</header>
      <main className="main">
        <Input />
        <div>
          <h3>할일😂</h3>

          <h3>완료😗</h3>
        </div>
      </main>
      <footer className="footer">복습</footer>
    </>
  );
}

export default App;
