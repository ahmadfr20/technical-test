import { useState } from 'react'


// import { close, logo, menu } from '../assets'

// import { navLinks } from const

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <div class="container fixed max-w-full bg-white z-10 px-4 py-5 bg-opacity-80 mx-auto shadow-sm backdrop-blur-xl">
      <div class="xl:mx-28 lg:mx-20 md:mx-auto flex justify-between">
        <a
          href="/"
          aria-label="Dimulai"
          title="Dimulai"
          class="inline-flex items-center"
        >
          <img src="" class="mr-3 h-8 rounded-full" alt="Logo" />
          <span class="ml-2 text-2xl font-blueberry tracking-wide text-gray-800 ">
            Dimulai
          </span>
        </a>
        <ul class="relative flex items-center max-w-full justify-end hidden min-w-xs space-x-7 sm:flex">
        <li>
            <a
              href="#ContentThumbnail"
              aria-label="Konten"
              title="Konten"
              class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Konten
            </a>
          </li>
          <li>
            <a
              href="#prev"
              aria-label="Our Produk"
              title="Our Produk"
              class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Produk
            </a>
          </li>
          <li>
            <a
              href="#Youtube"
              aria-label="Tentang Kami"
              title="Tentang Kami"
              class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#FAQs"
              aria-label="FAQ"
              title="FAQ"
              class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#ContentThumbnail"
              class="inline-flex items-center bg-emerald-500 justify-center h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="kenalan"
              title="kenalan"
            >
              Kenalan Yuk
            </a>
          </li>
        </ul>
        <div class="sm:hidden mr-30">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 ml-[70px] transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute ml-auto top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                    <img src="" class="mr-3 h-8 rounded-full" alt="Logo" />

                      <span class="ml-2 text-xl font-blueberry tracking-wide text-gray-800">
                        Dimulai
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                  <li>
                      <a
                        href="#ContentThumbnail"
                        aria-label="thumblail"
                        title="thumblail"
                        class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Konten
                      </a>
                    </li>
                    <li>
                      <a
                        href="#product"
                        aria-label="thumblail"
                        title="thumblail"
                        class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Produk
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Youtube"
                        aria-label="yutub"
                        title="yutub"
                        class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FAQs"
                        aria-label="nanya"
                        title="nanya"
                        class="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ContentThumbnail"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 focus:shadow-outline focus:outline-none"
                        aria-label="Kenalan Yuk"
                        title="Kenalan Yuk"
                      >
                        Kenalan Yuk
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar