import React, { useState } from 'react'


function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  return (
    <div>

      <input className='p-1 rounded-lg mt-4' type="text" placeholder='Enter Title Here' value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Create my Paste</button>
    </div>
  )
}

export default Home
