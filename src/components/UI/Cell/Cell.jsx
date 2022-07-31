import { StyledCell } from './styled.jsx';
import {useState, useEffect} from 'react';

function Cell(props) {
  // console.log(props.data);
  const cells = props.data;
  // const [cells, setCells] = useState([
  //   {id: 1, value: 2, x: 0, y: 0},
  //   {id: 2, value: 4, x: 1, y: 0},
  //   {id: 3, value: 8, x: 2, y: 0},
  //   {id: 4, value: 16, x: 3, y: 0},
  //   {id: 5, value: 32, x: 0, y: 1},
  //   {id: 6, value: 64, x: 1, y: 2},
  //   {id: 7, value: 128, x: 2, y: 3},
  // ]);
  // useEffect(() => {
  //   console.log(cells);
  // }, [cells]);

  // function button() {
  //   const arr = cells;
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i].y +=1;
  //   }
  //   const arrtest = [{id: 1}];
  //   setCells(() => {
  //     let arr = cells;
  //     for (let i = 0; i < arr.length; i++) {
  //       arr[i].y +=1;
  //     }
  //     return arr;
  //   }
    //   [
    //   {id: 1, value: 2, x: 0, y: 1},
    //   {id: 2, value: 4, x: 1, y: 1},
    //   {id: 3, value: 8, x: 2, y: 1},
    //   {id: 4, value: 16, x: 3, y: 1},
    //   {id: 5, value: 32, x: 0, y: 2},
    //   {id: 6, value: 64, x: 1, y: 3},
    //   {id: 7, value: 128, x: 2, y: 4},
    // ]
    // );
  // }

  useEffect(() => {
    const onKeypress = e => {
      // const arr = cells;
      // for (let i = 0; i < arr.length; i++) {
      //   arr[i].y +=1;
      // }
      // setCells([
      //   {id: 1, value: 2, x: 0, y: 1},
      //   {id: 2, value: 4, x: 1, y: 1},
      //   {id: 3, value: 8, x: 2, y: 1},
      //   {id: 4, value: 16, x: 3, y: 1},
      //   {id: 5, value: 32, x: 0, y: 2},
      //   {id: 6, value: 64, x: 1, y: 3},
      //   {id: 7, value: 128, x: 2, y: 4},
      // ]);
    }
    document.addEventListener('keypress', onKeypress);
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [cells]);

  return(
    <div>
      {/* {cells.map((item) => 
        <StyledCell key={item.id} x={item.x} y={item.y}>
          {item.value}
        </StyledCell>
      )} */}
      {
        cells.map((items_in_x) => 
          items_in_x.map((item) => 
            item.value > 0 &&
            <StyledCell key={item.id} x={item.x} y={item.y}>
              {item.value}
            </StyledCell>
          )
        )
      }
    </div>
  )
}

export default Cell;