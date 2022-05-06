import React from 'react';

const ProductDetailList = (props) => {
  const viewImageHandler =()=>{
    props.onClick(props.image)
    console.log(props.image," clicked");
  }
  return (
    <> 
    <button onClick={viewImageHandler}>
      <li>{<img src={props.image} alt={props.title} />}</li>;
    </button>
    </>
  );
}

export default ProductDetailList;
