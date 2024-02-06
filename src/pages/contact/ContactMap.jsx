import { RiMap2Fill } from "@remixicon/react";

function ContactMap() {
  return (
    <>
      <div className="relative">
        <div className=" bg-white mt-24">
          <iframe
            width="100%"
            height="480"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          />
        </div>
        <div className="flex max-w-[370px] bg-white absolute bottom-2 rounded-xl p-4 right-2">
          <div className="flex h-[60px] min-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary">
            <RiMap2Fill size={32} />
          </div>
          <div className="ml-4">
            <h4 className="mb-2 text-lg font-bold text-dark ">Location</h4>
            <p className="text-sm text-body-color dark:text-dark-6">
              1234 Street Name, City Name, United States
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMap;
