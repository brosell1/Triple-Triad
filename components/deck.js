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
  <div style={ deckStyle }>
    <h1 style={ headerStyle }>Player { props.player }</h1>
    { props.deck.map((item, index) => (
      <Panel onClick={(player, index) => props.onClick(player, index)} key={ index }>
        <Card stats={ item.stats } player={ props.player }/>
      </Panel>
    ))}
  </div>
)

export default Deck;
