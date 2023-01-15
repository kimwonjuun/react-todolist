import React, { useState } from 'react';

// Input Area
function Input() {
  const [inputValue, setInputValue] = useState('');

  const handleTodoChange = (event) => {
    // console.log(event);
    setInputValue(event.target.value);
  };
  const submitTodo = (event) => {
    // console.log(event);
    event.preventDefault();
    const newTodo = {
      id: 1,
      inputValue,
      isDone: false,
    };
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        할 일을 입력하세요.{' '}
        <input type="text" value={inputValue} onChange={handleTodoChange} />
        <button>제출</button>
      </form>
    </div>
  );
}

export default Input;
