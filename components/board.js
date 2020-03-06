import Panel from './panel';
import Card from './card';

const boardStyle = {
  width: 156
}

const Board = (props) => (
  <div style={ boardStyle }>
    {props.board.map((item, index) => (
      <Panel index={ index } key={ index }>
        <Card stats={ item.card.stats } player={ item.player }/>
      </Panel>
    ))}
  </div>
);

export default Board;
