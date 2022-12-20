import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const Clients = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <h2>{slice.primary.title}</h2>
      <div class="slider">
        <div class="slide-track">
          {slice.items.map((item) => (
            <div class="slide" key={item.image.url}>
              <img src={item.image.url} height="100" width="250" alt="" />
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Clients
