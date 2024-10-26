import React from 'react';
import { useParams } from 'react-router';
import { useGetOrderByIdQuery } from './orderApi';
import { imageUrl } from '../../constants/api_urls';

const OrderDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetOrderByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1 className="text-red-500">Error fetching order: {error.message}</h1>;
  }

  if (!data) {
    return <h1>No order data found.</h1>;
  }

  return (
    <div className='p-4'>
      <h1 className="text-xl font-bold mb-4">Order Details</h1>
      
      {/* Display Breeds */}
      <h2 className="text-lg font-semibold mb-2">Breeds</h2>
      {data.breeds.length > 0 ? (
        data.breeds.map(({ qty, product, _id }) => (
          <div key={_id} className="grid grid-cols-2 gap-4 mb-4">
            {product ? (
              <>
                <div>
                  <img src={`${imageUrl}${product.image}`} alt={product.title} className='h-[70px] w-[90px]' />
                </div>
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <h4>{`Rs. ${product.price}`}</h4>
                  <p>{`Quantity: ${qty}`}</p>
                  <p>Total:{`Rs.${product.price*qty}`}</p>
                </div>
              </>
            ) : null} {/* Skip rendering if product is not available */}
          </div>
        ))
      ) : (
        <h1>No breeds found in this order.</h1>
      )}

      {/* Display Accessories */}
      <h2 className="text-lg font-semibold mb-2 mt-6">Accessories</h2>
      {data.accessories.length > 0 ? (
        data.accessories.map(({ qty, accessory, _id }) => (
          <div key={_id} className="grid grid-cols-2 gap-4 mb-4">
            {accessory ? (
              <>
                <div>
                  <img src={`${imageUrl}${accessory.image}`} alt={accessory.title} className='h-[70px] w-[90px]' />
                </div>
                <div>
                  <h3 className="font-semibold">{accessory.title}</h3>
                  <h4>{`Rs. ${accessory.price}`}</h4>
                  <p>{`Quantity: ${qty}`}</p>
                  <p>{`Total: Rs. ${accessory.price * qty}`}</p>
                </div>
              </>
            ) : null} {/* Skip rendering if accessory is not available */}
          </div>
        ))
      ) : (
        <h1>No accessories found in this order.</h1>
      )}
      <hr />

      {/* Total Amount */}
      <div className="flex justify-evenly mt-10">
        <h1 className="text-xl font-semibold">Total</h1>
        <h1>Rs. {data.totalAmount}</h1>
      </div>
    </div>
  );
};

export default OrderDetail;
