import Panel from './panel';

const panels = Array(9).fill(null)
const boardStyle = {
  width: 156
}

const Board = () => (
  <div style={ boardStyle }>
    {panels.map((item, index) => <Panel index={ index } key={ index }></Panel>)}
  </div>
);

export default Board;
