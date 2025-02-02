import { IProduct } from "../../types/general";
import ClientSideImage from "../ClientSideProductImage";
import { Button } from "../UI/Button";
import { P } from "../UI/Typography";

const products: IProduct[] = [
  {
    id: 6,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    image: {
      mobile: "./assets/product-zx9-speaker/mobile/image-product.jpg",
      tablet: "./assets/product-zx9-speaker/tablet/image-product.jpg",
      desktop: "./assets/product-zx9-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      desktop:
        "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    },
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
        desktop: "./assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
        desktop: "./assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
        desktop: "./assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx7-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx7-speaker.jpg",
          desktop: "./assets/shared/desktop/image-zx7-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    image: {
      mobile: "./assets/product-zx7-speaker/mobile/image-product.jpg",
      tablet: "./assets/product-zx7-speaker/tablet/image-product.jpg",
      desktop: "./assets/product-zx7-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      desktop:
        "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    },
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable",
      },
      {
        quantity: 1,
        item: "7.5m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
        desktop: "./assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
        desktop: "./assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
        desktop: "./assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
  {
    id: 1,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    image: {
      mobile: "./assets/product-yx1-earphones/mobile/image-product.jpg",
      tablet: "./assets/product-yx1-earphones/tablet/image-product.jpg",
      desktop: "./assets/product-yx1-earphones/desktop/image-product.jpg",
    },
    category: "earphones",
    categoryImage: {
      mobile:
        "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      desktop:
        "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    },
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
        desktop: "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "./assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
        desktop: "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "./assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
        desktop: "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
    ],
  },
];

const HomeProducts = () => {
  //   const products: IProduct[] = await getHomeFeaturedProducts();
  const [product3, product2, product1] = products;
  return (
    <div className="flex flex-col mt-12">
      {product3 && (
        <div
          className="flex flex-col bg-orange-dark rounded-lg items-center py-12 
        bg-[url('/assets/pattern-circles.svg')] bg-cover bg-center bg-no-repeat
        lg:flex-row"
        >
          <div className="w-48 h-60 lg:w-[410px] lg:h-[493px] relative">
            <ClientSideImage
              slug={product3.slug}
              imageName={"image-speaker-zx9.png"}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-auto">
            <div className=" text-white text-center font-bold text-[24px] lg:text-[56px] mt-4">
              {product3.name}
            </div>
            <P className="text-grey-dark mt-6 text-center lg:text-left mx-6 lg:mx-0 max-w-80 lg:ml-0">
              {product3.description}
            </P>
            <Button
              href={`/products/${product3.slug}`}
              variant="secondary"
              className="mt-6"
            >
              See Product
            </Button>
          </div>
        </div>
      )}
      {product2 && (
        <div className="w-full relative min-h-80 mt-6 rounded-lg overflow-hidden">
          <ClientSideImage
            slug={product2.slug}
            imageName={"image-speaker-zx7.jpg"}
          />
          <div className="flex flex-col absolute left-0 top-0 bottom-0 my-auto h-fit items-center pl-6">
            <div className=" text-black text-center font-bold text-[24px] lg:text-[56px] mt-4">
              {product2.name}
            </div>
            <Button
              href={`/products/${product2.slug}`}
              variant="secondary"
              className="mt-6"
            >
              See Product
            </Button>
          </div>
        </div>
      )}
      {product1 && (
        <div className="w-full flex gap-2 mt-6 md:min-h-[320px]">
          <div className="relative flex flex-1 rounded-lg overflow-hidden">
            <ClientSideImage
              slug={product1.slug}
              imageName={"image-earphones-yx1.jpg"}
            />
          </div>
          <div className="bg-grey w-[48%] rounded-lg p-2 flex flex-col justify-center">
            <div className=" text-black text-left font-bold text-[24px] lg:text-[56px] mt-4">
              {product1.name}
            </div>
            <Button
              href={`/products/${product1.slug}`}
              variant="secondary"
              className="mt-6"
            >
              See Product
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
