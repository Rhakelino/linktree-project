import React from "react"

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 text-white">
      {/* Menggunakan class responsif untuk ukuran card */}
      <div className="w-80 lg:w-[500px] xl:w-[600px] 2xl:w-[700px] m-5"> {/* Menyesuaikan lebar card */}
        <div className="flex justify-center">
          <img src="images/rhakel.jpg" className="w-28 h-28 object-cover rounded-full" />
        </div>
        <div className="flex flex-col text-center gap-2 mt-3">
          <h1 className="font-bold text-xl">Rhakelino</h1>
          <p className="font-medium text-md text-slate-400">My Projects</p>
        </div>
        <a href="https://calculatoor-apps.netlify.app/" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Calculator App (Link Website)
          </div>
        </a>
        <a href="https://github.com/Rhakelino/calculator-app" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Calculator App (Source Code)
          </div>
        </a>
        <a href="https://juju-otaku.netlify.app/" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Web Anime List (Link Website)
          </div>
        </a>
        <a href="https://github.com/Rhakelino/juju-otaku" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Web Anime List (Source Code)
          </div>
        </a>
        <a href="https://juju-ai.netlify.app/" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Juju AI (Link Website)
          </div>
        </a>
        <a href="https://github.com/Rhakelino/juju-AI" target="_blank">
          <div className="flex mt-5 bg-white text-black w-full h-12 justify-center items-center rounded-full shadow-md font-bold hover:bg-slate-900 hover:text-white">
            Juju AI (Source Code)
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
