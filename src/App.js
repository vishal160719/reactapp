import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Item from './items'
const initialItems = Array(10).fill().map((x,i) => ({
  index:`${i}`,
  text:`items at index ${i}`
}))

const paginatedItems = Array(10).fill().map((x,i) => ({
  index:`1${i}`,
  text:`items at index 1  ${i}`
}))

function App() {
  const [items,setItems] = useState(initialItems)
  function addNewItems(){
    setItems((prevItems) => [...prevItems,...paginatedItems])
  }
  return <div>
    <button onClick={addNewItems}>Append new items</button>
    {items.map((items) => <Item data={items} key={items.index}/>)}
  </div>
}


export default App;
