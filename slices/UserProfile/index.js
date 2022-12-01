import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const UserCard = ({ item }) => {
  return (
    <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
        <div className="rounded overflow-hidden shadow-md bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                    <img src={item.profile_picture.url} alt={item.name} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                </div>
            </div>
            <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">{item.name}</h1>
                <p className="text-gray-800 text-sm text-center">{item.role}</p>
                <div className="text-center text-gray-600 text-base pt-3 mb-3 font-normal">
                <PrismicRichText field={item.description}/>
                </div>
            </div>
        </div>
    </div>
  );
};

const UserProfile = ({ slice }) => {
  console.log(slice.items);
  return (
    <Bounded as="section" className="bg-white">
    <div className="w-full section-bg px-10 pt-10">
        <div className="container mx-auto">
          <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
        {slice.items.map((item) => (
            <UserCard key={item.name} item={item} />
          ))}
          </div>
      </div>
      </div>
    </Bounded>
  );
};

export default UserProfile
