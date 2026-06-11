import dynamic from "next/dynamic";

// 🔥 Lazy load heavy sections
const Banner = dynamic(() => import("../app/src/layouts/Banner"));
const Brand = dynamic(() => import("../app/src/layouts/Brand"));
const Products = dynamic(() => import("../app/src/layouts/Products"));
const BuyNow = dynamic(() => import("../app/src/layouts/BuyNow"));
const Shipping = dynamic(() => import("../app/src/layouts/Shipping"));
const Collection = dynamic(() => import("../app/src/layouts/Collection"));
const LatestPrdct = dynamic(() => import("../app/src/layouts/LatestPrdct"));
const FturedPdcts = dynamic(() => import("../app/src/layouts/FturedPdcts"));
const BrandImg = dynamic(() => import("../app/src/layouts/BrandImg"));
const Blog = dynamic(() => import("../app/src/layouts/Blog"));

const Bags = dynamic(() => import("../app/src/layouts/Bags"));
const Jwelery = dynamic(() => import("../app/src/layouts/Jwelery"));
const Beauty = dynamic(() => import("../app/src/layouts/Beauty"));
const Wellness = dynamic(() => import("../app/src/layouts/Wellness"));
const Footwear = dynamic(() => import("../app/src/layouts/Footwear"));
const Electrnics = dynamic(() => import("../app/src/layouts/Electrnics"));

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Banner />

      {/* BRAND STRIP */}
      <Brand />

      {/* PRODUCTS */}
      {/* <Products /> */}

      {/* PROMO */}
      <BuyNow />

      {/* SHIPPING INFO */}
      <Shipping />

      {/* COLLECTION */}
      <Collection />

      {/* LATEST PRODUCTS */}
      <LatestPrdct />

      {/* FEATURED PRODUCTS */}
      <FturedPdcts />

      {/* BRAND IMAGE SECTION */}
      <BrandImg />

      {/* CATEGORY SECTIONS */}
      <Bags />
      <Jwelery />
      <Beauty />
      <Wellness />
      <Footwear />
      <Electrnics />

      {/* BLOG */}
      <Blog />
    </>
  );
}