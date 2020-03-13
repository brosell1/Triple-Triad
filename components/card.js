const classNames = require('classnames');

const Card = (props) => (
  <div className={classNames({
    card: true,
    inactive: props.played,
    playable: props.playable,
    selected: props.selected
  })}>
    <div className={classNames({
      card__overlay: true,
      [`player-${props.player}`]: true,
    })} />
    <img className={classNames({
      card__image: true,
      inactive: !props.imageUrl
    })} src={ props.imageUrl }/>
  </div>
);

export default Card;
