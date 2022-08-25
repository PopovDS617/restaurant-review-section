import React from 'react';
import { Restaurant } from '../../../models';
import Image from '../../../node_modules/next/image';

type RestaurantInformationProps = {
  item: Restaurant;
};

const RestaurantComponent = (props: RestaurantInformationProps) => {
  return (
    <div>
      <Image
        src={`/${props.image}`}
        alt={props.name}
        height={400}
        width={400}
        objectFit="cover"
      />
      <div>{props.name}</div>
      <div>{props.address}</div>
    </div>
  );
};

export default RestaurantComponent;
