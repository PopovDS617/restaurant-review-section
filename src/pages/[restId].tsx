import React from 'react';
import RestaurantComponent from '../components/restaurant/RestComponent';
import ReviewForm from '../components/form/ReviewForm';
import { DUMMY_DATA } from '../../dummy-data';

import { useRouter } from '../../node_modules/next/router';

const RestarauntPage = () => {
  const router = useRouter();
  const elemId = router.query.restId;

  const getElementById = (id: string) => {
    return DUMMY_DATA.find((el) => el.id === id);
  };

  const restaurant = getElementById(elemId);

  return (
    <section>
      Hello
      <RestaurantComponent
        name={restaurant.name}
        address={restaurant.address}
        image={restaurant.image}
      />
      <ReviewForm />
    </section>
  );
};

export default RestarauntPage;
