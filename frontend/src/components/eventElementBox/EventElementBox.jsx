import "./EventElementBox.css";
import EventElement from "../eventElement/EventElement";

function EventElementBox(props) {
  const events = props.events;

  return (
    <div className="element-box">
      {events.map((event, i) => {
        return <EventElement key={i} eventname={event.eventsName} icon={event.icon} changeEventStatus={props.changeEventStatus} eventStatus={props.eventStatus}/>;
      })}
    </div>
  );
}

export default EventElementBox;
