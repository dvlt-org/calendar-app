import React, { useState } from 'react'

export default function EventFrom({ onAddForm }) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")


  console.log(date)

  return (
    <div className='event-form'>
      <input type="text" placeholder='enter your task' value={title} onChange={(e) => { setTitle(e.target.value) }} />
      <input type="date" placeholder='enter your date' value={date} onChange={(e) => { setDate(e.target.value) }} />
      <button onClick={() => { onAddForm({ name: title, date: date }) }}>Add Button</button>
    </div>
  )
}
