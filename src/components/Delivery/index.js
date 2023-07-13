import React from 'react';
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurant';


const deliveryFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",

  },
  {
    id: 3,
    title: "Safe and Hygenic",

  },
  {
    id: 4,
    title: "Pure Veg",

  },
  {
    id: 5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",


  },

]

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName="Delivery restaurant in Banglore" />
    </div>
  )
}

export default Delivery;
