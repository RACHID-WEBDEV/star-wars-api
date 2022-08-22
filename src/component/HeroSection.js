import React, { useState } from "react";
function Header({ children }) {
  const [show, setShow] = useState(false);
  return (
    <div className="md:py-8 bg-[#000] overflow-y-hidden">
      <section>
        <nav className="w-full">
          <div className="container mx-auto px-6 flex items-center justify-between lg:bg-cover lg:bg-[url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg')]">
            <div className="hidden sm:flex flex-row items-center space-x-6">
              <img
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg"
                alt="social icon"
                height="25px"
                width="25px"
              />
              <img
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg"
                alt="social icon"
                height="25px"
                width="25px"
              />
              <img
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_tumblr-9dbf2f5872a3.svg"
                alt="social icon"
                height="15px"
                width="15px"
              />
              <img
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg"
                alt="social icon"
                height="25px"
                width="25px"
              />
              <img
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg"
                alt="social icon"
                height="25px"
                width="25px"
              />
              <span className="border-l border-[#7a7a7a] px-1 ml-2">
                <span className="ml-3 bg-[#7a7a7a] w-12 h-5 inline-flex items-center justify-center px-2 rounded-2xl">
                  <img
                    src="https://static-mh.content.disney.io/starwars/assets/shared/icon_kids-dc39fc54f6c2.svg"
                    alt="social icon"
                    height="28px"
                    width="28px"
                  />
                </span>
              </span>
            </div>
            <div className="flex items-center" aria-label="Home" role="img">
              <img
                className="cursor-pointer logo-style w-24 sm:w-auto"
                src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
                alt="logo"
              />
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <img
                  className="h-8 w-8 bg-white rounded"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
                  alt="show"
                />
              </button>
              <div
                id="menu"
                className={`md:block lg:block ${show ? "" : "hidden"}`}
              >
                <button
                  onClick={() => setShow(!show)}
                  className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3"
                >
                  <img
                    className="h-8 w-8"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                    alt="hide"
                  />
                </button>
                <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
                  <li className="text-gray-400 uppercase text-lg hover:text-gray-300 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">Series</a>
                  </li>
                  <li className="text-gray-400 uppercase text-lg hover:text-gray-300 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">Films</a>
                  </li>
                  <li className="text-gray-400 uppercase text-lg hover:text-gray-300 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">Videos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="w-full px-6">
          <div className="mt-8 relative rounded-lg bg-[#000000d7] container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <img
              className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
            <img
              className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
              alt="bg"
            />
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                All the Star Wars Movies you've ever wanted
              </h1>
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative sm:w-2/3 w-11/12">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
