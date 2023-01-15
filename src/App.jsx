import './App.css';
import { useState } from 'react';

// TODOLIST
// 1. input area, todolist area.
// 2. 인풋창 입력 -> 버튼 -> 투두리스트로 출력.
// 3. 투두리스트 진행/완료 간 스위치 가능, 삭제 가능.

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <main>
        <form>
          {/* 인풋 */}
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              // console.log(event);
              setInputValue(event.target.value);
              // console.log(event.target.value);
            }}
          />
          <button>제출</button>
        </form>

        <main>
          <h3>할일😂</h3>

          <h3>완료😗</h3>
        </main>
      </main>
    </>
  );
}

export default App;
