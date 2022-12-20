import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Video = ({ slice }) => (
  <section>
    <div aria-label="Background Image" class="relative mb-2 video-container-height" id="image-video" role="img">
    <div class="video-docker absolute bottom-0 left-0 w-full h-full overflow-hidden">
    <video autoplay="autoPlay" class="absolute" id="bgvid" loop="loop" muted="muted" playsinline="inline">
        <source data-src={slice.primary.video.url} type="video/mp4" src={slice.primary.video.url} />
    </video>
    </div>
    <div class="video-content absolute bottom-0 text-white mb-4 pl-4">
        {
          slice.primary.title ?
          <PrismicRichText field={slice.primary.title} className="mobile-h2 mb-2"/>
          : ""
        }
        {
          slice.primary.description ?
          <PrismicRichText field={slice.primary.description} className="mb-2"/>
          : ""
        }
        <a class="border-2 text-white inline-flex justify-center rounded-lg text-sm py-3 px-4 hover:bg-white/25 hover:ring-slate-900/15 " href={slice.primary.button.url}>{slice.primary.button_text}</a>
    </div>
    </div>
  </section>
)

export default Video
