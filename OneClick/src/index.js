import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  // Sử dụng hook useState để quản lý trạng thái "count"
  const [count, setCount] = useState(0);

  // Hàm xử lý khi nút bấm được nhấn
  const increaseCount = () => {
    setCount(count + 1); // Tăng giá trị count lên 1
  };

  return (
    <div>
      <h1>{count}</h1> {/* Hiển thị giá trị của count */}
      <button onClick={increaseCount}>Nhấn để tăng</button>
    </div>
  );
}

// Render component Counter vào thẻ có id là "root" trong index.html
ReactDOM.render(<Counter />, document.getElementById('root'));
