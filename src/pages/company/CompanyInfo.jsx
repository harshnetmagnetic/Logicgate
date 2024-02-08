import {
  RiEmotionHappyFill,
  RiGroupFill,
  RiInstanceFill,
  RiShakeHandsFill,
} from "@remixicon/react";

import servicesImg2 from "../../assets/images/services-img-2.jpg";

function CompanyInfo() {
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full mb-10 lg:w-1/2 lg:mb-0 ">
          <div className="lg:max-w-md">
            <div className="flex flex-col gap-6 mb-4">
              <div className="bg-primary h-1 w-12"></div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Welcome to Logicgate
              </h2>
              <p className="max-w-3xl text-lg">
                The leading provider of innovative solutions for your business
                needs. Whether you need a stunning applications, a user-friendly
                app, or a reliable support team, we have the expertise and
                experience to deliver.
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
            src={servicesImg2}
            className="relative z-40 object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
