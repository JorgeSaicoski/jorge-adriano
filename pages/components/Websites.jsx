import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

function Websites() {
  return (
  <section className="w-full pt-16 pb-20 bg-headerColor ">
      <div className="px-10 mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-second font-rarely2">
              Flexible <span className="text-focus font-beatyful">Prices</span>
          </h2>
          <p className="mt-3 text-lg text-textColor font-plexmono">Contact for more option. Contact for this option. Just contact!</p>
          <div className="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">

              <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl group">

                  <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-bodyColor hover:bg-focus rounded-2xl z-10 opacity-25 hover:translate-x-0 hover:translate-y-0 slowly" ></div>
                  <div className="absolute inset-0 w-full h-full border-2 border-textColor rounded-2xl"></div>
                  <div className="relative flex pb-5 space-x-5 border-b border-textColor lg:space-x-3 xl:space-x-5">
                      <div className="relative flex flex-col items-start">
                          <h3 className="text-xl font-bold text-focus">Simple Website</h3>
                          <p className="tracking-tight text-second">
                              <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                              <span className="text-3xl font-bold text-gray-800">50</span>
                          </p>
                      </div>
                  </div>

                  <ul className="relative py-12 space-y-3 text-justify">
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8 sm:opacity-0 group-hover:opacity-100"/>
                          <span>Page without interactions</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8 sm:opacity-0 delay-150 group-hover:opacity-100"/>
                          <span>Perfect for information Website building</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8 sm:opacity-0 delay-300 group-hover:opacity-100"/>
                          <span>Generic and fast building</span>
                      </li>
                  </ul>

                  <a href="#hire" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group z-30">
                      <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 faster ease-out rounded-xl bg-focus"></span>
                      <span className="absolute inset-0 w-full h-full border-2 border-second rounded-xl"></span>
                      <span className="relative text-black">Choose Plan</span>
                  </a>

              </div>
              <div className="relative p-8 lg:p-6 xl:p-8 rounded-2xl">

                  <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-bodyColor hover:bg-focus rounded-2xl z-10 opacity-25 hover:translate-x-0 hover:translate-y-0 slowly"></div>
                  <div className="absolute inset-0 w-full h-full border-2 border-textColor rounded-2xl"></div>
                  <div className="relative flex pb-5 space-x-5 border-b border-textColor lg:space-x-3 xl:space-x-5">
                      <div className="relative flex flex-col items-start">
                          <h3 className="text-xl text-focus">Interact Website</h3>
                          <p className="tracking-tight text-second">
                              <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                              <span className="text-3xl font-bold text-gray-800">50</span>
                              <span className="text-sm -translate-y-0.5 inline-block transform">/ section</span>
                          </p>
                      </div>
                  </div>

                  <ul className="flex flex-col py-12 space-y-3 text-justify">
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Website with contact area</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Costumized</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Costumized prices dont be shy contact-me with your idea</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Receive a fast generic Website and then we build the principal</span>
                      </li>
                  </ul>

                  <a href="#hire" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group z-30">
                      <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 faster ease-out rounded-xl bg-focus"></span>
                      <span className="absolute inset-0 w-full h-full border-2 border-second rounded-xl"></span>
                      <span className="relative text-black">Choose Plan</span>
                  </a>

              </div>


              <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1 ">

                  <div className="absolute inset-0 w-full h-full transform translate-x-2 z-10 opacity-50 slowly hover:translate-x-0 translate-y-2 hover:translate-y-0 bg-focus rounded-2xl"></div>
                  <div className="absolute inset-0 w-full h-full border-2 border-textColor rounded-2xl"></div>
                  <div className="relative flex pb-5 space-x-5 border-b border-textColor lg:space-x-3 xl:space-x-5">
                      <div className="relative flex flex-col items-start">
                          <h3 className="text-xl font-bold text-focus">eCommerce</h3>
                          <p className="tracking-tight text-second">
                              <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                              <span className="text-3xl font-bold text-gray-800"> {`200<`}</span>
                          </p>
                      </div>
                  </div>

                  <ul className="relative py-12 space-y-3 text-justify">
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Very Costumized eCommerce</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Price change with the dificult of the desires</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>6 months to do any change</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm font-medium text-focus">
                          <CheckCircleIcon className="w-8"/>
                          <span>Admin page</span>
                      </li>
                  </ul>

                  <a href="#hire" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group z-20">
                      <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 faster transition-all rounded-xl bg-second"></span>
                      <span className="absolute inset-0 w-full h-full border-2 border-textColor rounded-xl"></span>
                      <span className="relative text-black">Choose Plan</span>
                  </a>

              </div>

          </div>
      </div>
  </section>

  )
}

export default Websites
