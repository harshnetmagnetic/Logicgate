import products1Img1 from "../../assets/images/services-img-1.png";
import products1Img2 from "../../assets/images/services-img-2.png";
import products1Img3 from "../../assets/images/services-img-3.png";
import products1Img4 from "../../assets/images/services-img-3.png";
import Product from "./Product";

const productsCards = [
  {
    title: "POS System",
    description:
      "Our team of experienced designers and developers offer comprehensive social media management services to help you build a strong online presence.",
    images: [products1Img1, products1Img2, products1Img3, products1Img4],
    link: "www.google.com",
    reviews: 1209,
    viewLink: "www.google.com",
  },
  {
    title: "POS System",
    description:
      "Our team of experienced designers and developers offer comprehensive social media management services to help you build a strong online presence.",
    images: [products1Img1, products1Img2, products1Img3, products1Img4],
    link: "www.google.com",
    reviews: 1209,
    viewLink: "www.google.com",
  },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="bg-primary h-1 w-12"></div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            We Just Offer The Best Products
          </h2>
          <p className="max-w-3xl text-lg">
            Our team of experts is committed to providing you with the best
            products that cater to your unique needs. Whether you need , we have
            the expertise to deliver the results you need.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          {productsCards.map((product) => (
            <Product key={product.title} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
