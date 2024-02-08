import userImg1 from "../../assets/images/user-img-1.jpg";
import userImg2 from "../../assets/images/user-img-2.jpg";
import userImg3 from "../../assets/images/user-img-3.jpg";
import userImg4 from "../../assets/images/user-img-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Nathan F. ",
    desc: "I have been thoroughly impressed by them. Great service and great results. I would highly recommend them to anyone.",
    img: userImg1,
  },
  {
    id: 2,
    name: "Charlie Moi",
    desc: "Working with this logicgate for several years now and I am extremely satisfied.",
    img: userImg3,
  },
  {
    id: 3,
    name: "jenny Rose",
    desc: "What a great service! Great product, great team and great results. I would highly recommend.",
    img: userImg2,
  },
  {
    id: 4,
    name: "Ronit sharma",
    desc: "We hired them to build a application and they did an excellent job. They were very professional and the application was exactly what I wanted.",
    img: userImg4,
  },
];

function Testimonials() {
  return (
    <section className="bg-white mt-32">
      <div className="py-8 px-4 mx-auto max-w-[1440px] text-left lg:py-16 lg:px-6">
        <div className="flex flex-col gap-6 mb-8">
          <div className="bg-primary h-1 w-12"></div>
          <h2 className="mb-4 text-4xl tracking-tight max-w-xl font-bold">
            What our clients are saying about us
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col p-8 items-start text-left border justify-between rounded-xl min-h-72 hover:bg-gray-50 border-gray-200 md:p-12 transition-all duration-150"
            >
              <blockquote className="mx-auto mb-8 lg:max-w-2xl ">
                <p className="my-4">{testimonial.desc}</p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src={testimonial.img}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-xs text-left">
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
