function Testimonials() {
  return (
    <section className="bg-white mt-32">
      <div className="py-8 px-4 mx-auto max-w-[1440px] text-left lg:py-16 lg:px-6">
        <div className="flex flex-col gap-6 mb-8">
          <div className="bg-primary h-1 w-12"></div>
          <h2 className="mb-4 text-4xl tracking-tight max-w-xl font-bold">
            What our customers are saying about us!
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-8">
          <figure className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 rounded-br-none hover:bg-gray-50 border-gray-200 md:p-12 transition-all duration-150">
            <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
              <p className="my-4">
                “I have been thoroughly impressed with the service provided by
                them. They have helped me to improve my website&apos;s
                functionality and make it more user-friendly”
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Oliver Smith</div>
                <div className="text-sm font-light text-gray-500">
                  Marketing Manager
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 rounded-bl-none hover:bg-gray-50 border-gray-200 md:p-12 transition-all duration-150">
            <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
              <p className="my-4">
                “I have been working with this logicgate for several months now
                and I am extremely satisfied with the results”
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Alexander Brown</div>
                <div className="text-sm font-light text-gray-500 ">
                  IT Specialist
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 rounded-tr-none hover:bg-gray-50 border-gray-200 md:p-12 transition-all duration-150">
            <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
              <p className="my-4">
                “I&apos;ve been working with this company for a few months now
                and I couldn&apos;t be happier with the results. They have
                helped me revamp my website and make it more user-friendly and
                visually appealing”
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Emma Rodriguez</div>
                <div className="text-sm font-light text-gray-500 ">
                  Graphic Designer
                </div>
              </div>
            </figcaption>
          </figure>
          <figure
            className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 rounded-tl-none hover:bg-gray-50 
          border-gray-200 md:p-12 transition-all duration-150"
          >
            <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
              <p className="my-4">
                “ I have been thoroughly impressed with the service provided by
                them. They have helped me to improve my online presence and
                reach a wider audience”
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Lucas Nguyen</div>
                <div className="text-sm font-light text-gray-500 ">
                  Developer at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
