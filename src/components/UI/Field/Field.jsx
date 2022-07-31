import { StyledField } from './styled.jsx';
import Cell from '../Cell/Cell.jsx';
import {useState, useEffect} from 'react';
import Menu from '../Menu/Menu.jsx';

function Field() {

  const [cells2, setCells2] = useState([
    [{id: 1, value: 2, x:0, y:0},{id: 2, value: 2, x:1, y:0},{id: 3, value: 2, x:2, y:0},{id: 4, value: 0, x:3, y:0}],
    [{id: 5, value: 0, x:0, y:1},{id: 6, value: 0, x:1, y:1},{id: 7, value: 0, x:2, y:1},{id: 8, value: 0, x:3, y:1}],
    [{id: 9, value: 0, x:0, y:2},{id: 10, value: 0, x:1, y:2},{id: 11, value: 0, x:2, y:2},{id: 12, value: 0, x:3, y:2}],
    [{id: 13, value: 0, x:0, y:3},{id: 14, value: 0, x:1, y:3},{id: 15, value: 0, x:2, y:3},{id: 16, value: 0, x:3, y:3}],
  ])

  function getRndNumber() {
    return  Math.round(Math.random() * 3);
  }

  function newElement() {
    const randX = getRndNumber();
    const randY = getRndNumber();
    let arr = cells2.slice();
    if (arr[randX][randY].value === 0) {
      arr[randX][randY].value = Math.random() > 0.5 ? 2 : 4;
      setCells2(arr);
      return arr;
    } else {
      newElement();
    }
  }

  function moveRight() {
    let arr = cells2.slice();
    arr.forEach((cell_in_x, index) => {
      for (let i = 0; i < cell_in_x.length-1; i++) {
        // if (cell_in_x[i+1].value === 0 && cell_in_x[i].value !== 0) {
          if (cell_in_x[i].x < 3) {
          // cell_in_x[i+1].value = cell_in_x[i].value;
          // cell_in_x[i].value = 0;
          if (cell_in_x[i+1].value === 0 && cell_in_x[i].value !== 0) {
            cell_in_x[i].x += 1;
            cell_in_x[i+1].x -= 1;
            [arr[index][i], arr[index][i+1]] = [arr[index][i+1], arr[index][i]];
            moveRight();
          }
        }    
      }
    })
    console.log(arr);
    return arr;
  }

  function moveLeft() {
    let arr = cells2.slice();
    arr.forEach((cell_in_x, index) => {
      for (let i = cell_in_x.length-1; i > 0; i--) {
        if (cell_in_x[i].x > 0) {
          if (cell_in_x[i-1].value === 0 && cell_in_x[i].value !== 0) {
            cell_in_x[i].x -= 1;
            [arr[index][i], arr[index][i-1]] = [arr[index][i-1], arr[index][i]];
            moveLeft();
          }
        }
      }
      //   if (cell_in_x[i-1].value === 0 && cell_in_x[i].value !== 0) {
      //     cell_in_x[i-1].value = cell_in_x[i].value;
      //     cell_in_x[i].value = 0;
      //     moveLeft();
      //   }    
      // }
    })
    return arr;
  }

  function moveBottom() {
    let arr = cells2.slice();
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        if (arr[k][i].y < 3) {
          if (arr[k+1][i].value === 0 && arr[k][i].value !== 0) {
            arr[k][i].y += 1;
            arr[k+1][i].y -= 1;
            [arr[k][i], arr[k+1][i]] = [arr[k+1][i], arr[k][i]];
            moveBottom();
          }
        }
        // if (arr[k+1][i].value === 0 && arr[k][i].value !== 0) {
        //   arr[k+1][i].value = arr[k][i].value;
        //   arr[k][i].value = 0;
        //   moveBottom();
        // }
      }
    }
    console.log(arr);
    return arr;
  }

  function moveTop() {
    let arr = cells2.slice();
    for (let i = 3; i >= 0; i--) {
      for (let k = 3; k > 0; k--) {
        if (arr[k][i].y > 0) {
          if (arr[k-1][i].value === 0 && arr[k][i].value !== 0) {
            arr[k][i].y -= 1;
            [arr[k][i], arr[k-1][i]] = [arr[k-1][i], arr[k][i]];
            moveTop();
          }
        }
        // if (arr[k-1][i].value === 0 && arr[k][i].value !== 0) {
        //   arr[k-1][i].value = arr[k][i].value;
        //   arr[k][i].value = 0;
        //   moveTop();
        // }
      }
    }
    return arr;
  }

  function combinedRow(move) {
    let arr = cells2.slice();
    arr.forEach((cell_in_x) => {
      for (let i = 0; i < cell_in_x.length-1; i++) {
        if (cell_in_x[i].value === cell_in_x[i+1].value && cell_in_x[i].value !== 0) {
          cell_in_x[i].value = 0;
          cell_in_x[i+1].value = cell_in_x[i+1].value * 2;
          move();
        }
      }
    })
  }

  function combinedCol(move) {
    let arr = cells2.slice();
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        if (arr[k+1][i].value === arr[k][i].value && arr[k][i].value !== 0) {
          arr[k][i].value = arr[k][i].value * 2;
          arr[k+1][i].value = 0;
          move();
        }
      }
    }
  }

  useEffect(() => {
    const onKeypress = e => {
      switch(e.key) {
        case 'd': {
          setCells2(moveRight());
          // combinedRow(moveRight);
          // newElement();
          break;
        }
        case 'a': {
          setCells2(moveLeft());
          combinedRow(moveLeft);
          // newElement();
          break;
        }
        case 'w': {       
          setCells2(moveTop());
          combinedCol(moveTop);
          // newElement();
          break;
        }
        case 's': {
          setCells2(moveBottom());
          combinedCol(moveBottom);
          // newElement();
          break;
        }
        default: {

        }
      }
    }
    document.addEventListener('keypress', onKeypress);
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [cells2]);

  return (
    <div>
      <button onClick={newElement}>12</button>
      <Menu get={setCells2}/>
      <StyledField>
        <Cell data={cells2}/>
      </StyledField>
    </div>
    
  );
}

export default Field;