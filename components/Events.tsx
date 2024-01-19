

export default function Services() {
    return (
        <section className="text-gray-600 body-font flex flex-grow h-screen place-content-center">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap m-4">
            <div className="p-4 lg:w-1/3 w-full">
              <div
                className="h-full bg-opacity-75 bg-indigo-500 px-8 pt-16 pb-24 rounded-sm overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-100 mb-3">Latest News</h1>
                <p className="leading-relaxed mb-3 text-gray-100">Latest News on education in passau</p>
                <a className=" inline-flex items-center text-yellow-300" href="#">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 w-full">
              <div
                className="h-full bg-opacity-75 bg-violet-500 px-8 pt-16 pb-24 rounded-sm overflow-hidden text-center relative">
    
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-100 mb-3">Latest Events</h1>
                <p className="leading-relaxed mb-3 text-gray-100">Information on latest events.</p>
                <a className=" inline-flex items-center text-yellow-300" href="#">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 w-full">
              <div
                className="h-full  bg-opacity-75 bg-indigo-500 pt-16 pb-24 rounded-sm overflow-hidden text-center relative">
    
                <h1 className="title-font sm:text-2xl text-xl font-medium mb-3 text-gray-100">Important Dates</h1>
                <p className="leading-relaxed mb-3 text-gray-100">Important dates to remember</p>
                <a className=" inline-flex items-center text-yellow-300" href="#">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}