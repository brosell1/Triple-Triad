const classNames = require('classnames');

const Card = (props) => (
  <div className={classNames({
    card: true,
    [`player-${props.player}`]: true,
    inactive: props.played
  })}>
    <span className='north' >{ props.stats.north }</span>
    <span className='east' >{ props.stats.east }</span>
    <span className='south' >{ props.stats.south }</span>
    <span className='west' >{ props.stats.west }</span>
  </div>
);

export default Card;
