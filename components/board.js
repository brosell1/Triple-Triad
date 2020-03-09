import Panel from './panel';
import Card from './card';

const Board = (props) => (
  <div className='board'>
    {props.board.map((item, index) => (
      <Panel index={ index } key={ index } onClick={() => props.onClick(index)}>
        <Card stats={ item.card.stats } player={ item.player }/>
      </Panel>
    ))}
  </div>
);

export default Board;
