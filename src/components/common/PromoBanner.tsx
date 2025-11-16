import React from "react";
import bannerData from "../../mocks/PromoBanner";
import Masonry from "./Masonry";

const PromoBanner: React.FC = () => {
  return (
    <section className="my-8">
      <Masonry
        items={bannerData}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="top"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>
  );
};

export default PromoBanner;
