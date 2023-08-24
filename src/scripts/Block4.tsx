function Block4() {
  return (
    <>
      <div className="snap-start snap-always lg:container lg:justify-center lg:gap-y-0 container w-80 h-screen flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <div id="text-container" className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="lg:text-3xl xl:text-4xl font-title text-xl text-purple">ABSTRACTION REVERSION</h1>

          <p className="lg:text-2xl font-title text-m text-gray">Contextualize each step of the way.</p>

          <p className="lg:text-3xl text-lg">
            In-depth understanding of <br /> how a wallet works.
          </p>
        </div>

        <div className="lg:w-[460px] lg:mt-6 flex flex-col justify-center items-center gap-y-3">
          <span className="lg:hover:scale-105 text-gray w-full border-2 border-purple border-solid rounded-xl py-3 pl-3 pr-[111px] text-[0.8rem] translate-x-[43px] lg:translate-x-0 lg:pr-3 lg:py-5 lg:text-[1rem]">Multi-formatted Private Key</span>
          <span className="lg:hover:scale-105 text-gray w-full bg-[#b11af723] rounded-xl py-3 pl-3 pr-[111px] text-[0.8rem] translate-x-[43px] lg:translate-x-0 lg:pr-3 lg:py-5 lg:text-[1rem]">Uncompressed Public Key Generation</span>
          <span className="lg:hover:scale-105 text-white w-full bg-[#b11af768] rounded-xl py-3 pl-3 pr-[111px] text-[0.8rem] translate-x-[43px] lg:translate-x-0 lg:pr-3 lg:py-5 lg:text-[1rem]">Key Hashing & Encoding Standards</span>
          <span className="lg:hover:scale-105 text-white w-full bg-[#b11af7ae] rounded-xl py-3 pl-3 pr-[111px] text-[0.8rem] translate-x-[43px] lg:translate-x-0 lg:pr-3 lg:py-5 lg:text-[1rem]">Individual UTXO Selection</span>
          <span className="lg:hover:scale-105 text-white w-full bg-purple rounded-xl py-3 pl-3 pr-[111px] text-[0.8rem] translate-x-[43px] lg:translate-x-0 lg:pr-3 lg:py-5 lg:text-[1rem]">Signing & Broadcasting of TX Hex</span>
        </div>
      </div>
    </>
  )
}

export default Block4
