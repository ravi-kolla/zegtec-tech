import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const Footer = ({ footer, settings }) => {
  console.log(footer.data.links);
  console.log(footer.data.otherlinks);
  return (
    <div class="pt-5 footer-shadow">
       <div class="sh-lilac  max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
         <div class="p-5">
         <PrismicLink href="/" className="pt-2 text-xl font-semibold tracking-tight max-h-52">
           <PrismicNextImage field={footer.data.logo}/>
         </PrismicLink>
         </div>
          <div class="p-5">
             <div class="text-sm uppercase lilac-color font-bold">
              <PrismicRichText field={footer.data.firstColumnTitle} />
             </div>
               {footer.data?.links.map((item) => (
                 <PrismicLink key={item.label} className="my-3 block" href={item.link.url}>{item.label}</PrismicLink>
               ))}
          </div>
          <div class="p-5">
          <div class="text-sm uppercase lemon-color font-bold">{footer.data.headerSecond}</div>
             {footer.data?.otherlinks.map((item) => (
               <PrismicLink key={item.label} className="my-3 block" href={item.link.url}>{item.label}</PrismicLink>
             ))}
          </div>
          <div class="p-5">
             <div class="text-sm uppercase blue-brand font-bold">Contact us</div>
             <p class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA</p>
             <p class="my-3 block" href="/#">contact@company.com </p>
          </div>
       </div>
       <div class="pt-2">
       <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="https://linkedin.com" class="w-6 mx-1"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com" class="w-6 mx-1"><i class="fa-brands fa-twitter"></i></a>
             </div>
             <div class="my-5">{footer.data.copyright}</div>
          </div>
           </div>
    </div>
  );
};
