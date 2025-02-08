

import './App.css'
import { useState } from 'react';

function App() {
  

  const [notes, setNotes] = useState([]);

  const [state, setState] = useState(
    {
      title: "",
      note: "",
      id: Math.random(1)* 10,
    }
  );
   const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    setNotes([...notes, state]);
    setState({title:"",note:"",id:Math.random(1)*10});

  }
  
  return (
    <>
      <div className="app bg-blue-200 h-screen rounded-2xl ">
        <h1 className='text-center text-5xl  '> Note App </h1>
      
        <div className="create-note w-[400px] mx-auto">
          <form className='flex flex-col'onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" placeholder="title..." name='title'className='border-2 border-blue-400 p-2 mb-4 shadow-2xl  rounded-xl mt-3' onChange={handleChange} value={state.title} ></input> 
            <textarea 
             name="note"
             id="note"
             cols="30"
             rows="5"
             placeholder='note...'
             className='border-2 border-blue-400 p-2 mb-4 shadow-2xl '
             onChange={handleChange}
             value={state.note}
             >
             </textarea>
             <button className='bg-violet-500 p-3 text-white rounded-xlbg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... rounded-xl shadow-2xl  ' onSubmit={handleSubmit}>Add Note</button>
          </form>
        </div>


        <div className="note-container rounded-3xl shadow-2xl pl-4 mr-17 text-right border-t-2 bg-blue-300 m-14 flex flex-wrap">
        {
          notes.length > 0 ? notes.map((note, i) => {
            return (
              <div className='note bg-white shadow-2xl text-left rounded-2xl ml-12 mb-4 mt-5 w-[300px] p-4 py-10 relative'key={i}>
              <button className='delete-note absolute right-2 top-0 font-bold text-2xl text-red-500'onClick={()=>handleDelete(note.id)}>x</button>
              <h3 className="font-bold text-1xl pb-2">{note.title}</h3>
              <p>
                {note.note}
              </p>
          </div>
            );
          }) : <p className="py-3 ml-2">
            No notes available.
          </p>
        }
        </div>
      </div>
    </>
  )
}

export default App
