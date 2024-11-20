import React from "react"

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 text-white">
      <div className="max-w-sm">
        <div className="flex justify-center">
          <img src="images/rhakel.jpg" className="w-20 h-20 object-cover rounded-full" />
        </div>
        <div className="flex flex-col text-center gap-2 mt-3">
          <h1 className="font-bold text-xl">Rhakelino</h1>
          <p className="font-medium text-sm">Source Code Projects</p>
        </div>
        <a href="https://github.com/Rhakelino/calculator-app" target="_blank">
          <div className="flex mt-5 bg-white text-black font- w-80 h-12 justify-center items-center rounded-full shadow-md hover:bg-slate-900 hover:text-white">
            Calculator App
          </div>
        </a>
        <a href="https://github.com/Rhakelino/juju-otaku" target="_blank">
          <div className="flex mt-5 bg-white text-black font- w-80 h-12 justify-center items-center rounded-full shadow-md hover:bg-slate-900 hover:text-white">
            Web Anime List
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
