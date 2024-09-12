import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  // Sử dụng useState để khai báo một biến đếm ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm xử lý khi nhấn nút để tăng giá trị biến count
  const increaseCount = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    // In giá trị mới ra console
    console.log(updatedCount);
  };

  return (
    <div>
      <h1>{count}</h1> {/* Hiển thị giá trị của biến count */}
      <button onClick={increaseCount}>Nhấn để tăng</button>
    </div>
  );
}

// Render component Counter vào thẻ có id là "root" trong index.html
ReactDOM.render(<Counter />, document.getElementById('root'));