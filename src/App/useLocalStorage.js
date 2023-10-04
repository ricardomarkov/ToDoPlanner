import React from 'react';

function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem=initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);
    const storeItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
    return [item, storeItem];
  }
  export {useLocalStorage};