import { Link } from "react-router-dom";

function ComingSoonPage() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-[1440px] lg:py-16 lg:px-6 h-[100vh] grid place-content-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-semibold md:text-4xl">
            This page is coming soon!
          </p>
          <Link
            to="/"
            className="rounded-full mt-6 inline-block bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonPage;
