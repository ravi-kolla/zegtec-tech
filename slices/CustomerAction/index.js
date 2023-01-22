import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CustomerActionSlice} CustomerActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomerActionSlice>} CustomerActionProps
 * @param { CustomerActionProps }
 */
const CustomerAction = ({ slice }) => (
    <div class="customer-action p-0 relative">
      <div class="h-1/2 w-full absolute top-0 -z-10"></div>
      <div class="CAcontainer flex flex-wrap">
        <div class="CAbox bg-cloud-color CAbox-left relative">
          <div class="CAbox-innerBlock top-0 h-full absolute"></div>
          <div class="flex flex-col h-full justify-between items-baseline">
            <div>
              <p class="mb-8 relative ink-color">{slice.primary.leftsubtext}</p>
              <h2 class="relative ink-color">{slice.primary.lefttitle}</h2>
            </div>
            <a href="/join/" class="border border-ink-color font-bold py-2 px-4 rounded-full ink-color">{slice.primary.leftbuttontext}</a>
          </div>
        </div>
        <div class="CAbox bg-ink-color CAbox-right relative">
          <div class="CAbox-innerBlock top-0 h-full absolute"></div>
          <div class="flex flex-col h-full justify-between items-baseline">
            <div>
              <p class="mb-8 relative cloud-color">{slice.primary.rightsubtext}</p>
              <h2 class="relative cloud-color">{slice.primary.righttitle}</h2>
            </div>
            <a href="/partners/" class="border border-cloud-color font-bold py-2 px-4 rounded-full cloud-color">{slice.primary.rightbuttontext}</a>
          </div>
        </div>
      </div>
    </div>
)

export default CustomerAction
