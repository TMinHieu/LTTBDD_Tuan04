import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ArrayUpdater() {
  // Sử dụng useState để khai báo mảng gồm 3 phần tử [1, 2, 3]
  const [numbers, setNumbers] = useState([1, 2, 3]);

  // Hàm xử lý khi nhấn nút để tăng giá trị của mỗi phần tử trong mảng
  const increaseArrayValues = () => {
    // Tạo mảng mới với mỗi phần tử tăng lên 1
    const updatedNumbers = numbers.map(number => number + 1);
    // Cập nhật lại mảng mới vào trạng thái
    setNumbers(updatedNumbers);
  };

  return (
    <div>
      <h1>{numbers.join(", ")}</h1> {/* Hiển thị các phần tử mảng */}
      <button onClick={increaseArrayValues}>Nhấn để tăng các giá trị</button>
    </div>
  );
}

// Render component ArrayUpdater vào thẻ có id là "root" trong index.html
ReactDOM.render(<ArrayUpdater />, document.getElementById('root'));
