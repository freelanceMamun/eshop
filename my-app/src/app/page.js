import BannerSlider from '@/components/slider/BannerSlider';
import MarqueText from '@/components/marqueText/marqueText';
import Card from '@/components/Card/Card';
import QuickViewModal from '@/components/modal/QuickViewModal';
import Banner from '@/components/Banner/Banner';
import CategoryBanner from '@/components/Banner/CategoryBanner';
import Testimonials from '@/components/testimonials/testimonials';

export default function Home() {
  return (
    <main className="">
      <BannerSlider></BannerSlider>
      <MarqueText></MarqueText>
      <div className="py-10 bg-white">
        <div className="">
          <h4 className="text-center text-2xl font-semibold tracking-wider text-black">
            BIG SALES
          </h4>
        </div>
        <div className="filter py-4">
          <ul className="flex gap-3 items-center justify-center">
            <li>
              <a
                href="#"
                className="uppercase font-semibold text-[14px] tracking-wider text-black"
              >
                WOMEN
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[#838383] hover:text-black transition-all duration-200 uppercase font-semibold text-[14px] tracking-wider "
              >
                MEN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  text-[#838383] hover:text-black transition-all duration-200  uppercase font-semibold text-[14px] tracking-wider "
              >
                KIDS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  text-[#838383] hover:text-black transition-all duration-200 uppercase font-semibold text-[14px] tracking-wider "
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      {/* Slider */}
      <Banner></Banner>
      
      {/* <QuickViewModal /> */}

      <div className="py-12 lg:px-32 bg-white">
        <div className="text-center">
          <p className="xl:text-5xl xl:leading-[70px] md:text-3xl text-2xl">
            We believe that every human deserves to feel beautiful and
            confident, and we are committed to providing you with the best
            quality and styles that will make you look and feel your best.
          </p>
        </div>
      </div>

      <CategoryBanner></CategoryBanner>
      {/* Testimonials */}
      <Testimonials />
      <MarqueText></MarqueText>
    </main>
  );
}
