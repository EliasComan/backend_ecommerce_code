import { Link } from 'react-router-dom'
import React from 'react'

const ItemList = ({items}) => {
  console.log(items)
  return (
    <>{
      items &&
      items.map( item => {
         return  <Link key={item._id} to={`/coleccions/:${item._id}`} >
         <div
           className="flex shadow hover:shadow-xl hover:shadow-[#9921e8]/20  border-solid m-5 border-black flex-col rounded-xl mt-6"
         >
           <img
             className="h-72 rounded w-96"
            src= {`${item.coverPage}`}
            alt="Nombre colecion"
           />
   
           <div className="flex flex-col p-3 justify-around items-center">
             <img
               className=" border-2 shadow rounded-full justify-self-center w-16"
               src={`${item.thumbnail}`}
               alt="Nombre collecion"
             />
             <h2 className="text-2xl"> <strong> {item.name}</strong></h2>
           </div>
   
           <div className="flex px-5 pb-2 items-center ">
             <p className="text-gray-400 text-xl">
               {item.description}
             </p>
           </div>
   
         </div>
       </Link>
  })}
  </>
  )
}

export default ItemList