import React from 'react';
import { Button } from 'semantic-ui-react';

export const Item = ({ item }) => {
  console.log(item, 'item');
  const { image_link, name, price, description } = item;
  console.log(item);

  return (
    <>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>{price}</strong>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <Button color='orange'>구매하기</Button>
    </>
  );
};

export default Item;
