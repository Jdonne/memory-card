const Card = (props) => {
  return (
    <img
      className="cards border rounded border-secondary m-2"
      alt="choice"
      src={props.img}
      onClick={props.handleCard}
      id={props.displayId}
    />
  );
};

export default Card;
