import React from "react";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage = ({ params: { id } }: ProductDetailsPageProps) => {
  return <div>ProductDetailsPage: {id}</div>;
};

export default ProductDetailsPage;
