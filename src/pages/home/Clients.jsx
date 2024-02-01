function Clients() {
  return (
    <div className="bg-white mt-24">
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:gap-8 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="bg-primary h-1 w-12"></div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Trusted by Clients Worldwide
            </h2>
            <p className="max-w-3xl text-lg">
              Here are some of the companies we&apos;ve helped scale. We
              transformed their business through innovative solutions and expert
              services.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-1 md:grid-cols-3 lg:mt-0 lg:grid-cols-4">
            <div className="col-span-1 flex justify-center py-8 px-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
