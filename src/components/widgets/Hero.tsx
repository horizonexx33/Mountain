import Image from "next/image";
import { HeroProps } from "~/shared/types";
import CTA from "../common/CTA";
const Hero = (props: { data: HeroProps }) => {
    const { title, subtitle, callToAction, callToAction2, image, player } = props.data;
    return (
    <section id="heroOne">
    <div>
    {player && (
             <div className="">
             {player}
           </div>
            )}
    </div>
            <div className="text-center ">
              {title && (
                <h1  className="font-heading text-5xl font-bold tracking-tighter md:text-6xl">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  {callToAction && <CTA data={callToAction} />}
                  {callToAction2 && <CTA data={callToAction2} />}
                </div>
              </div>
            </div>
      </section>
    );
  };
  
  export default Hero;