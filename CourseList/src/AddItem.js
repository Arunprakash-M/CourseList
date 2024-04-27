import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='AddItem'>AddItem</label>
        <input
        autoFocus
        ref = {inputRef}
        id = 'AddItem'
        type='text'
        placeholder='Add Items'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='AddItem'
        onClick={()=>inputRef.current.focus()}
        >

            <FaPlus/>
            </button>
    </form>
  ) 
}

export default AddItem