const northStyle = {
  position: 'absolute',
  top: 5,
  left: '50%',
  transform: 'translateX(-50%)',
}

const eastStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 5,
}

const southStyle = {
  position: 'absolute',
  bottom: 5,
  left: '50%',
  transform: 'translateX(-50%)',
}

const westStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: 5,
}


const player1 = {
  backgroundColor: '#acbefb',
    position: 'relative',
    height: '100%',
    width: '100%',
}

const player2 = {
  backgroundColor: '#ffcccb',
    position: 'relative',
    height: '100%',
    width: '100%',
}

const Card = (props) => (
  <div style={ props.player === 1 ? player1 : player2 }>
    <span style={ northStyle }>{ props.north }</span>
    <span style={ eastStyle }>{ props.east }</span>
    <span style={ southStyle }>{ props.south }</span>
    <span style={ westStyle }>{ props.west }</span>
  </div>
);

export default Card;
