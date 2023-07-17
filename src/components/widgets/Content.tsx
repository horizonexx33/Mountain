import { CallToAction, PricingProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';
const Content = ({ header, prices }: PricingProps) => (
  <section className="bg-primary-50 dark:bg-slate-800 " id="pricing">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
    </div>
  </section>
);

export default Content;
