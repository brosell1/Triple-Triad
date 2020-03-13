import Panel from './panel';
import Card from './card';

const Library = (props) => {
  const asdf = props.cards.find((item) => item.id === props.selected);

  return <div>
    <div className="library">
      {props.cards.map(item => (
        <button onClick={() => props.onClick(item.id)}
          key={ item.name }
          className="library__tile">
          <img src={ item.icon } />
        </button>
      ))}
    </div>
    <div className="selected">
      <Panel>
        { asdf ? <Card imageUrl={ asdf.image }
          playable={ false }/> : ''}
      </Panel>
    </div>
  </div>
}

export default Library;
