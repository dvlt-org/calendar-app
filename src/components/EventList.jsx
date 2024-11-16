import React from 'react'

export default function EventList({ events }) {
  return (
    <div className='event-list'>
      <h2>Event List</h2>
      {
        events.map((item, index) => {
          return (
            <div className='event-list__item' key={index}>
              <strong>{item.date}: {item.name}</strong>
            </div>
          )
        })
      }
    </div>
  )
}
