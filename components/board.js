import Panel from './panel';
import Card from './card';

const Board = (props) => (
  <div className='board'>
    {props.board.map((item, index) => (
      <Panel index={ index } key={ index } onClick={() => props.onClick(index)}>
        <Card imageUrl={ item.card.imageUrl }
          stats={ item.card.stats }
          player={ item.player }
          playable={ false }/>
      </Panel>
    ))}
  </div>
);

export default Board;
