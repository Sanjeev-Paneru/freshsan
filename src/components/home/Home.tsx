import Hero from "./Hero";
import FeatureProduct from "../products/FeatureProduct";
import Fields from "./Fields";
import WeAre from "./WeAre";
import WhyChoice from "./WhyChoice";
import BannerTwo from "./BannerTwo";

export default function Home() {
  return (
    <>
      <Hero />
      <Fields />
      <WeAre />
      <WhyChoice />
      <FeatureProduct />
      <BannerTwo />
    </>
  );
}
