import React, { useState } from "react";

import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import ProductDetailList from "./ProductDetailList";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = (props) => {
  const { productId } = useParams();
  const [showImage, setShowImage] = useState(props.data[0].imageUrl.imageUrl1);

  const { data } = props;
  console.log("props", data);
  const product = data.filter((pro) => {
    return pro.id === productId;
  });
  const showImageHandler = (imageId) => {
    setShowImage(imageId);
  };
  const productImage = Object.values(product[0].imageUrl).map((element) => {
    return (
      <ProductDetailList
        key={element}
        title={product[0].title}
        image={element}
        onClick={showImageHandler}
      />
    );
  });

  return (
    <>
      <h1>Product Detail</h1>
      <p>{product[0].title}</p>
      <div className={classes.div_main}>
        <span className={classes.image_list}>
          <ul>{productImage}</ul>
        </span>
        <span className={classes.image}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: showImage,
              },
              largeImage: {
                src: showImage,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </span>
        <div>
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
