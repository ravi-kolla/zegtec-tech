import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const IconText = ({ slice }) => {
  return (
    <div className="section-bg py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-10 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {slice.items.map((item) => (
              <div key={item.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="sm:min-w-0 sm:flex-1">
                  <i className={"fa " + (item.iconname ? item.iconname : '')}></i>
                  <p className="text-lg font-semibold leading-8 text-gray-900 sub-header">{item.heading}</p>
                  <PrismicRichText field={item.description}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconText
