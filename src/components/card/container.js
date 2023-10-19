
import Card from './card1';
import './Card.css';

function CardContainer() {
  return (
    <div className="wrapper">
      <div className="containercard">
        <input type="radio" name="slide" id="c1" checked/>
        <Card id={1} title="1" />

        <input type="radio" name="slide" id="c2" checked/>
        <Card id={2} title="2"  />

        <input type="radio" name="slide" id="c3" checked/>
        <Card id={3} title="3"  />

        <input type="radio" name="slide" id="c4" checked/>
        <Card id={4} title="4"  />
      </div>
    </div>
  );
}

export default CardContainer;