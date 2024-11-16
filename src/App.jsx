import React, { useState } from 'react'
import EventForm from "./components/EventForm"
import EventList from "./components/EventList"



export default function App() {
  const [events, setEvents] = useState([])


  const addEvent = (newEvent) => {
    setEvents([...events, newEvent])
  }

  return (
    <div className='app'>
      <h1>Calendar</h1>
      <EventForm onAddForm={addEvent} />
      <EventList events={events} />
    </div>
  )
}
