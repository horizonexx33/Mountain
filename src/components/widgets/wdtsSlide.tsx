'use client'
import Image from "next/image";
import { slideProps } from "~/shared/types";
import { Carousel } from "flowbite-react";
const Comps = (props: { data: slideProps }) => {
    const { title, subtitle,image, } = props.data;
    return (
    <section id="wdtsS">
    <div>
    </div>
            <div className="text-center ">
              {title && (
                <h1  className="font-heading text-5xl font-bold tracking-tighter md:text-6xl">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <h4 className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</h4>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">

                </div>
              </div>
            </div>
            <Carousel>
            {image && (
                <div className="relative m-auto max-w-7xl">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                    placeholder="blur"
                    loading="eager"
                    priority
                    sizes="(max-width: 64rem) 100vw, 1024px"
                  />

                </div>
            )}

            </Carousel>
         
      </section>
    );
  };
  
  export default Comps;