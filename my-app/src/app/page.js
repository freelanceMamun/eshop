import BannerSlider from '@/components/slider/BannerSlider';
import MarqueText from '@/components/marqueText/marqueText';
import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <div className="">
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
    </div>
  );
}
