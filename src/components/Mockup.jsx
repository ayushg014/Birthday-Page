// import React from "react";
import Home from "./Home";

const Mockup = () => {
  return (
    <div className="m-[1rem]">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://khandwlwal_baby.com</div>
        </div>
        {/* <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div> */}
        <div className="flex justify-around lg:items-center max-sm:flex-col max-sm:justify-start max-sm:items-center max-md:hidden">
          <h3 className="text-2xl font-small">02 April 2024</h3>
          <h1 className="text-4xl font-bold">Happy Birthday!!!</h1>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-[2.5rem]"
          >
            <div className="w-[20rem] rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/f9FC64m/IMG-7740.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 ml-14 max-sm:hidden">
          <h1 className="text-4xl font-bold">Khandelwall Jii ❤️</h1>
        </div>

        {/* Small Screen */}
        <div className="md:hidden">
          <div className="flex justify-around items-center">
            <h3 className="text-2xl font-small">02 April 2024</h3>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mr-[2.5rem]"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/f9FC64m/IMG-7740.jpg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold">Happy Birthday!!!</h1>
          </div>
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-4xl font-bold">Khandelwall Jii ❤️</h1>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Mockup;
