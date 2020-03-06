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

const deckList = Array(5).fill(null)

const Deck = (props) => (
  <div style={ deckStyle }>
    <h1 style={headerStyle}>Player {props.player}</h1>
    {deckList.map((item, index) => (
      <Panel key={ index }>
        <Card north='1' east='5' south='3' west='6' player={ props.player }/>
      </Panel>
    ))}
  </div>
)

export default Deck;
