function Home() {
  return (
    <div className="flex flex-col justify-center p-4 h-full">
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/flux"
        >
          Flux
        </a>
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/simple-flux"
        >
          Simple Flux
        </a>
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/proxy"
        >
          Proxy
        </a>
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/atom"
        >
          Atom
        </a>
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/observable"
        >
          Observable
        </a>
        <a
          className="md:w-3/12 w-40 md:h-60 h-40 bg-blue-200 flex items-center justify-center rounded-xl hover:bg-blue-100 transition-colors"
          href="/state-machine"
        >
          State Machines
        </a>
      </div>
    </div>
  )
}

export default Home;
