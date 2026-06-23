import React from "react";

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
}

const EventList = () => {

  const events: Event[] = [
    {
      title: "Sample Event",
      description: "University club event",
      date: "2026-06-25",
      location: "Campus"
    }
  ];


  return (
    <div>

      <h2>Upcoming Events</h2>

      {
        events.map((event, index)=>(
          <div key={index}>

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <p>{event.date}</p>

            <p>{event.location}</p>

          </div>
        ))
      }

    </div>
  );
};


export default EventList;