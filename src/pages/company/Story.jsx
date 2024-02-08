function Story() {
  return (
    <>
      <div className="mt-24">
        {/* End Title */}

        <div>
          <div className="bg-primary h-1 w-12 mb-6"></div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h2 className=" text-3xl tracking-tight max-w-xl font-bold">
                Our Founding Story
              </h2>
            </div>
            <div>
              <p className=" text-gray-600 ">
                Started Logicgate, a web application development company, to
                offer affordable, fast, and high-quality solutions. They named
                it Logicgate to express their passion for logic and innovation.
                They grew their team and services, using the latest technologies
                and tools. They worked on various projects and industries,
                gaining reputation and recognition. Logicgate is now one of the
                leading web application companies in India, with a mission to
                create value through web development.
              </p>
            </div>
            {/* End Col */}
            <div>
              <h2 className=" text-3xl tracking-tight max-w-xl font-bold">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 ">
                Our mission is to provide innovative, efficient, and affordable
                web solutions to businesses and individuals. We strive to create
                value for our clients by delivering high-quality services and
                products. We are committed to helping our clients achieve their
                goals and grow their businesses through our expertise and
                experience.
              </p>
            </div>
            {/* End Col */}
            <div>
              <h2 className="mb-4 text-3xl tracking-tight max-w-xl font-bold">
                Our Vision
              </h2>

              <p className=" text-gray-600 ">
                We aim to be the go-to company for businesses and individuals
                looking for innovative, efficient, and affordable web
                development solutions. We want to create a positive impact on
                the world by helping businesses and individuals achieve their
                goals and grow their businesses.
              </p>
            </div>

            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  );
}

export default Story;
