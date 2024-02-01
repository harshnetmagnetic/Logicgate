const testimonials = [
  {
    id: 1,
    name: "Oliver Smith",
    title: "Marketing Manager",
    org: "ABC Company",
    desc: "I have been thoroughly impressed with the service provided by them. They have helped me to improve my website functionality and make it more user-friendly",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    id: 2,
    name: "Alexander Brown",
    title: "IT Specialist",
    org: "XYZ Company",
    desc: "I have been working with this logicgate for several months now and I am extremely satisfied with the results",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Graphic Designer",
    org: "ABC Company",
    desc: "I have been working with this company for a few months now and I couldnt be happier with the results. They have helped me revamp my website and make it more user-friendly and visually appealing",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    id: 4,
    name: "Lucas Nguyen",
    title: "Developer at Google",
    org: "XYZ Company",
    desc: "I have been thoroughly impressed with the service provided by them. They have helped me to improve my online presence and reach a wider audience",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
];

function Testimonials() {
  return (
    <section className="bg-white mt-24">
      <div className="py-8 px-4 mx-auto max-w-[1440px] text-left lg:py-16 lg:px-6">
        <div className="flex flex-col gap-6 mb-8">
          <div className="bg-primary h-1 w-12"></div>
          <h2 className="mb-4 text-4xl tracking-tight max-w-xl font-bold">
            What our customers are saying about us!
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-2">
          {testimonials.map((testimonial) => (
            <>
              <figure
                key={testimonial.id}
                className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 hover:bg-gray-50 border-gray-200 md:p-12 transition-all duration-150"
              >
                <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
                  <p className="my-4">{testimonial.desc}</p>
                </blockquote>
                <figcaption className="flex items-center space-x-3">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={testimonial.img}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-xs text-left">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs">
                      {testimonial.title} at {testimonial.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
