import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';


function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searhParams, setSearchParams] = useSearchParams();
  const pasteId = searhParams.get("pasteId");
  const dispatch = useDispatch();
  function createPaste() {
    const paste = {
      title: title,
      value: value,
      _id: paste ||
        new Date.now().toString(32),
      createAt: new Date().toString(),
    }

    if (paste) {
      // update
      dispatch(updateToPaste(paste));
    }
    else {
      // Add
      dispatch(addToPaste(paste));
      // After creation or updateion
      setTitle("");
      setValue("");
      setSearchParams({});      
    }
  }
  return (
    <div >
      <div className='flex flex-row gap-8 place-content-between '>

        <input className='p-1 rounded-lg mt-4 w-[66%] pl-5' type="text" placeholder='Enter Title Here' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button
          onClick={createPaste}
          className='p-1 rounded-lg mt-4'>{
            pasteId ? "Update Button" :
              "Create My Paste"
          }</button>
      </div>

      <div>

        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={value}
          rows={20}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  )
}

export default Home
