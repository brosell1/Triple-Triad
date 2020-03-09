// const northStyle = {
//   position: 'absolute',
//   bottom: 35,
//   left: '50%',
//   transform: 'translateX(-50%)',
// }
//
// const eastStyle = {
//   position: 'absolute',
//   bottom: 20,
//   right: 5,
// }
//
// const southStyle = {
//   position: 'absolute',
//   bottom: 5,
//   left: '50%',
//   transform: 'translateX(-50%)',
// }
//
// const westStyle = {
//   position: 'absolute',
//   bottom: 20,
//   left: 5,
// }
//
//
// const player1 = {
//   backgroundColor: '#acbefb',
//   position: 'relative',
//   height: '100%',
//   width: '100%',
// }
//
// const player2 = {
//   backgroundColor: '#ffcccb',
//   position: 'relative',
//   height: '100%',
//   width: '100%',
// }
//
// const inactive = {
//   display: 'none',
// }
//
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

// <div ng-class="{disabled: $ctrl.disabled}"></div>

// <div className={props.played === true ? "disabled" : ""}></div>

/*

<div className={classnames(
{
  'disabled': props.played === true,
  'veryCool': props.cool === true,
}
)}></div>

*/
