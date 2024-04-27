import React from 'react';
import ItemList from './ItemList';
const Content = ({items,handleCheck,handleDelete}) => {
//  console.log("inside content",items);
  // console.log(handleCheck)
  // console.log(handleDelete)
  return (
    <>
      {(items.length) ?(
        <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       /> ) : (
        <p style = {{marginTop:'2rem'}}>Your list is empty</p>
      )}
    </>
  );
};
export default Content;
