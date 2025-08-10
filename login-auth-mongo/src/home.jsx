import React from 'react'

const home = () => {
  return (
    <div
          className="min-h-screen w-screen bg-no-repeat bg-cover bg-center relative"
         
        >
          {/* 🔝 Top Navigation Buttons */}
          <div className="flex justify-end p-6 space-x-4 absolute top-0 right-0">
            <button
              
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Help
            </button>
            <button
              className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>

          {/* 🔽 Content Blocks */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 pt-24">
            {/* Todo Block */}
            <div className="bg-black/60 p-8 rounded-xl max-w-2xl text-center shadow-lg">
              <h1 className="text-3xl font-bold text-white mb-4">Travel To-Do Planner</h1>
              <p className="text-gray-300 mb-6">
                Planning your next adventure? Use this travel to-do list to stay organized and stress-free before, during, and after your trip. ✈️🌍
              </p>
              <p className="text-white mb-6">Click below to see the recommended tasks.</p>
              <blockquote className="italic text-gray-400 mt-4">
                "The world is a book, and those who do not travel read only one page." – Saint Augustine
              </blockquote>
              <button
                className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg shadow-lg font-bold hover:bg-blue-700 transition"
              >
                View To-Do List
              </button>
            </div>

            {/* List Block */}
            <div className="bg-black/60 p-8 rounded-xl max-w-2xl text-center shadow-lg">
              <h1 className="text-4xl font-bold text-white mb-4">Explore. Plan. Experience. 🌎✈️</h1>
              <br></br>
              <p className="text-white leading-relaxed">
                Organize everything from packing to bookings. Start your journey stress-free and make it unforgettable.
              </p><br></br>
              <p className="italic text-sm text-gray-300 mt-6">“Jobs fill your pockets, but adventures fill your soul.” — Jaime Lyn</p>
              <br></br>
              <button
                className="bg-green-600 text-white px-6 py-3 mt-6 rounded-lg shadow-lg font-bold hover:bg-green-700 transition"
              >
                View Travel Details
              </button>
            </div>
          </div>
        </div>
  )
}

export default home
