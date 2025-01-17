import BannerSlider from '@/components/slider/BannerSlider';
import MarqueText from '@/components/marqueText/marqueText';
import Card from '@/components/Card/Card';
import QuickViewModal from '@/components/modal/QuickViewModal';
import Banner from '@/components/Banner/Banner';
import CategoryBanner from '@/components/Banner/CategoryBanner';

export default function Home() {
  return (
    <main className="">
      <BannerSlider></BannerSlider>
      <MarqueText></MarqueText>
      <div className="py-10">
        <div className="">
          <h4 className="text-center text-2xl font-semibold tracking-wider">
            BIG SALES
          </h4>
        </div>
        <div className="filter py-4">
          <ul className="flex gap-3 items-center justify-center">
            <li>
              <a
                href="#"
                className="uppercase font-semibold text-[14px] tracking-wider"
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
        <div className="grid grid-cols-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      {/* Slider */}
      <Banner></Banner>
      <></>
      {/* <QuickViewModal /> */}

      <div className="py-12 lg:px-16">
        <div className="text-center">
          <p className="text-5xl">
            We believe that every human deserves to feel beautiful and
            confident, and we are committed to providing you with the best
            quality and styles that will make you look and feel your best.
          </p>
        </div>
      </div>

      <CategoryBanner></CategoryBanner>

      <MarqueText></MarqueText>
    </main>
  );
}
