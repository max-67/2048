import { StyledMenu } from './styled.jsx';

function Menu(props) {
  function randomInt(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function getCoordinates(arr) {
    while ((arr[0].x === arr[1].x) && (arr[0].y === arr[1].y)) {
      arr[0].x = randomInt(0,3);
      arr[0].y = randomInt(0,3);
      arr[1].x = randomInt(0,3);
      arr[1].y = randomInt(0,3);
    }
    return arr;  
  }

  function newGame() {
    console.log('hello');
    const arr = [
      {id: 1, value: 2, x: 0, y: 0},
      {id: 2, value: 2, x: 0, y: 0},
    ];
    const arr2 = getCoordinates(arr);
    console.log(arr2);
    props.get(arr);
  }
  return (
    <StyledMenu>
      <button onClick={newGame}>Новая игра</button>
    </StyledMenu>
  )
}

export default Menu;