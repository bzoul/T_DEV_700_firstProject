import React, { useEffect, useState } from 'react';
import Product from './Product'

const ProductList = ({ input }) => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const arr = []
    input.forEach((elem) => {
      arr.push(<Product id={elem.id} name={elem.name} price={elem.price} desc={elem.desc} img={elem.img} qty={elem.qty} key={elem.id} />)
    })
    setList(arr);
  }, [input])

  return (
    <>
      { list }
    </>
  )

}

export default ProductList