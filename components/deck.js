import Panel from './panel';
import Card from './card';

const deckStyle = {
  width: 156,
  textAlign: 'center',
  lineHeight: 0,
  margin: '0px 20px',
}

const headerStyle = {
  lineHeight: '37px',
}

const Deck = (props) => (
  <div className='deck'>
    <h1 className='deck__title'>Player { props.player }</h1>
    { props.deck.map((item, index) => (
      <Panel onClick={() => props.onClick(props.player, index)} key={ index }>
        <Card imageUrl={ item.imageUrl }
          stats={ item.stats }
          player={ props.player }
          played={ item.played }
          playable={ props.player === props.turn }/>
      </Panel>
    ))}
  </div>
);

export default Deck;
