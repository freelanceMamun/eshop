import Image from 'next/image';
import BannerSlider from '@/components/slider/BannerSlider';
import MarqueText from '@/components/marqueText/marqueText';

export default function Home() {
  return (
    <div className="">
      <BannerSlider></BannerSlider>
      <MarqueText></MarqueText>
    </div>
  );
}
