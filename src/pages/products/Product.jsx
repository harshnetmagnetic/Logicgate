import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div
      key={product.title}
      className="group gap-8 flex flex-col lg:flex-row justify-between"
    >
      <div className="lg:w-1/2">
        <h1 className="font-bold  sm:text-3xl">{product.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:justify-between">
          <Link to="#" className="text-sm mt-2">
            {product.link}
          </Link>
          <div className="flex items-center">
            <div className="flex items-center">
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                />
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                />
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                />
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                />
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                />
              </svg>
            </div>
            <p className="ml-2 text-sm font-medium text-gray-500">
              {product.reviews} reviews
            </p>
          </div>
        </div>
        <div>
          <h2 className="mt-8 font-bold">Description</h2>
          <p className="mt-2">{product.description}</p>
        </div>
        <Link
          to={product.viewLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95 inline-block mt-8"
        >
          View Product
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="overflow-hidden sm:rounded-3xl rounded-xl h-[400px]">
          <img
            className="h-full w-full max-w-full object-cover"
            src={selectedImage ? selectedImage : product.images[0]}
            alt=""
          />
        </div>
        <div className="flex flex-row gap-2 mb-6 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 mt-2 self-end">
          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleImageClick(image)}
              className={`flex-0 aspect-square border-2 h-16 sm:h-20 overflow-hidden rounded-lg text-center
                  ${
                    selectedImage === image
                      ? " border-secondary"
                      : "border-transparent"
                  }
                  `}
            >
              <img className="h-full w-full object-cover" src={image} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
