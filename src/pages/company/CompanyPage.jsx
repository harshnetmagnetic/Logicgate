import {
  RiEmotionHappyFill,
  RiGroupFill,
  RiInstanceFill,
  RiShakeHandsFill,
} from "@remixicon/react";

function CompanyPage() {
  return (
    <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
      <div className="flex flex-wrap ">
        <div className="w-full mb-10 lg:w-1/2 lg:mb-0 ">
          <div className="lg:max-w-md">
            <div className="flex flex-col gap-6 mb-4">
              <div className="bg-primary h-1 w-12"></div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Welcome to Logicgate
              </h2>
              <p className="max-w-3xl text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                officiis porro quas magnam ullam corporis earum beatae atque
                aliquam iste.
              </p>
            </div>

            <div className="flex flex-wrap flex-col gap-2 mt-8">
              <div className="flex gap-2">
                <div className="p-6 bg-blue-50 rounded-xl w-1/2  flex items-start justify-center  flex-col">
                  <span className="text-blue-500 dark:text-blue-400">
                    <RiInstanceFill size={32} />
                  </span>
                  <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">
                    80+
                  </p>
                  <h2 className="text-sm text-gray-700 ">Projects Completed</h2>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl w-1/2  flex items-start justify-center  flex-col">
                  <span className="text-blue-500 dark:text-blue-400">
                    <RiGroupFill size={32} />
                  </span>
                  <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">
                    50+
                  </p>
                  <h2 className="text-sm text-gray-700 ">Clients</h2>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="p-6 bg-blue-50 rounded-xl w-1/2  flex items-start justify-center  flex-col">
                  <span className="text-blue-500 dark:text-blue-400">
                    <RiEmotionHappyFill size={32} />
                  </span>
                  <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">
                    99%
                  </p>
                  <h2 className="text-sm text-gray-700 ">Satisfaction</h2>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl w-1/2  flex items-start justify-center  flex-col">
                  <span className="text-blue-500 dark:text-blue-400">
                    <RiShakeHandsFill size={32} />
                  </span>
                  <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">
                    Countless
                  </p>
                  <h2 className="text-sm text-gray-700 ">Relationship Built</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <img
            src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
            alt=""
            className="relative z-40 object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <figure className="max-w-screen-md mt-32">
        <div className="flex items-center mb-4 text-yellow-300">
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <blockquote>
          <p className="text-2xl font-medium">
            “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            maxime nesciunt nostrum quia culpa fugit vel aliquam ipsum pariatur
            modi”
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
            <cite className="pe-3 font-medium ">Gandalf the Grey</cite>
            <cite className="ps-3 text-sm text-gray-600 ">CEO, Logicgate</cite>
          </div>
        </figcaption>
      </figure>

      {/* FAQ */}
      <div className="mt-8">
        {/* End Title */}
        <div className="border-t pt-16">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h2 className=" text-3xl tracking-tight max-w-xl font-bold">
                Our Founding Story
              </h2>
            </div>
            <div>
              <p className=" text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                reprehenderit dignissimos sint eius sequi veritatis voluptatem
                architecto velit? Cum fugiat recusandae necessitatibus sint at
                dolorem laborum natus? In quam dignissimos molestias
                perspiciatis natus ullam neque cum consequatur nostrum modi!
                Natus.
              </p>
            </div>
            {/* End Col */}
            <div>
              <h2 className=" text-3xl tracking-tight max-w-xl font-bold">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                illum est quo voluptatum, commodi neque officia harum veritatis
                modi sint!
              </p>
            </div>
            {/* End Col */}
            <div>
              <h2 className="mb-4 text-3xl tracking-tight max-w-xl font-bold">
                Our Vision
              </h2>

              <p className=" text-gray-600 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                asperiores doloremque iusto corrupti fuga non minima vel nostrum
                beatae recusandae!
              </p>
            </div>

            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End FAQ */}

      {/* Team */}
      <div className="mt-24">
        {/* Title */}
        <div className="bg-primary h-1 w-12 mb-6"></div>

        <div className=" mb-10 lg:mb-14">
          <h2 className="mb-4 text-4xl tracking-tight max-w-xl font-bold">
            Our Team Members
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                David Forren
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Founder / CEO
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Amil Evara
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Ebele Egbuna
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Maria Powers
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Director of sales
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Delia Pawelke
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Front-end Developer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Tom Lowry
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Louise Donadieu
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Jeff Fisher
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="">
            <img
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 "
              src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Sophia Harrington
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </section>
  );
}

export default CompanyPage;
