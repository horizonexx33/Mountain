import { IconCheck } from '@tabler/icons-react';
import { CallToAction, PricingProps } from '~/shared/types';
import CTA from '../common/CTA';
import HeaderWidget from '../common/HeaderWidget';

const Content = ({ header, prices }: PricingProps) => (
  <section className="bg-primary-50 dark:bg-slate-800 " id="pricing">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
      <div className="flex items-stretch justify-center">
        <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {prices.map(({ title, value, period, texts, callToAction, hasRibbon, ribbonTitle }, index) => (
            <div
              className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
              key={`item-pricing-${index}`}
            >
      
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Content;
