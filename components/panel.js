const panelStyle = {
  width: 50,
  height: 80,
  margin: 1,
  border: '1px solid #DDD',
  backgroundColor: '#FFF'
}

const Panel = (props) => (
  <button onClick={ props.onClick } style={ panelStyle }>
    { props.children }
  </button>
);

export default Panel;
