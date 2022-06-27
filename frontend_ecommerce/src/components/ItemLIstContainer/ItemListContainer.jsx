import React,{ useEffect, useState } from 'react'

import ItemList from '../ItemList/ItemList'
import axios from 'axios'
import { itemListContainerStyles } from './itemListContainer.styles'

const ItemListContainer = () => {
    const [items, setItems ] = useState([])
    useEffect ( () => {
        axios.get('http://localhost:8080/data')
            .then(res => {
                setItems(res.data)
            })
    },[])
  return <div className={itemListContainerStyles.container}><ItemList items={items}/></div>
      
}

export default ItemListContainer