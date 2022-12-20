import React from 'react'
import { PrismicRichText } from '@prismicio/react'


const ServicesCarousel = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <h2>{slice.primary.title}</h2>
    </Bounded>
  );
};

export default ServicesCarousel
