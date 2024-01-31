import {
  ClockIcon,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function ChooseUs() {
  return (
    <div className="bg-white mt-32">
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:gap-8 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="bg-primary h-1 w-12"></div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why We Are Best From Others?
            </h2>
            <p className="max-w-3xl text-lg">
              We take pride in the quality of our work and are choose us for all
              of your services needs and experience the difference that our
              expertise and commitment to quality can make.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <CodeBracketSquareIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
                Latest Web Technologies
              </h3>
              <p className="text-md mt-2">
                We stay up-to-date with the latest web technologies to provide
                you with the best possible solutions.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <ClockIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Project Management</h3>
              <p className="text-md mt-2">
                We ensure that you receive regular updates and that your project
                is completed on time and within budget.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <CubeTransparentIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
                Customized Solutions
              </h3>
              <p className="text-md mt-2">
                We work closely with you to develop customized solutions that
                meet your unique business needs.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <UserGroupIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
                Leading Industry Vendors
              </h3>
              <p className="text-md mt-2">
                We work with the best vendors in the industry to provide you
                with the highest quality products and services.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <CurrencyDollarIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
                Cost-Effective Pricing
              </h3>
              <p className="text-md mt-2">
                We offer transparent and affordable pricing that is designed to
                maximize your return on investment.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg hover:bg-gray-50 transition-all">
              <ShieldCheckIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
                Security and Data Privacy
              </h3>
              <p className="text-md mt-2">
                We take your privacy seriously and have implemented security
                measures to ensure that your data is safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
