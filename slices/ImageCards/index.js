import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ImageCard = ({ item }) => {
  const image = item.image;

  return (
    <div class="flex justify-center">
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      {prismicH.isFilled.image(image) && (
        <div className="bg-gray-100">
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} className="rounded-t-lg w-full" />
          </ConditionalWrap>
        </div>
      )}
      <div class="p-6">
        <h5 class="lilac-color text-xl font-medium mb-2">{item.title}</h5>
        <PrismicRichText field={item.text} className="text-gray-700 text-base mb-4" />
        {prismicH.isFilled.link(item.buttonLink) && (
          <button type="button" className="inline-block px-6 py-2.5 bg-lilac-color text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-dark-lilac-color hover:shadow-lg focus:bg-dark-lilac-color focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dark-lilac-color active:shadow-lg transition duration-150 ease-in-out">{item.buttonText || "More Info"}</button>
        )}
      </div>
    </div>
    </div>
  );
};

const ImageCards = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center sub-header">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ImageCards;
