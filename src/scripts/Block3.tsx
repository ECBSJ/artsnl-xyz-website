import buildBit from "../assets/Build-Bit.png"

function Block3() {
  return (
    <>
      <div className="lg:container lg:flex-row lg:justify-center container w-80 h-screen relative flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <div id="text-container" className="lg:mt-0 lg:text-end lg:items-end lg:gap-y-7 lg:pr-28 xl:pr-48 lg:order-last flex flex-col justify-center items-center gap-y-5">
          <h1 className="font-title text-4xl text-purple">GRANULAR UX</h1>
          <p className="lg:text-3xl xl:text-5xl text-lg">
            There's more to it <br /> than just tapping <br /> "Create Wallet".
          </p>
          <p className="lg:text-xl lg:text-right lg:w-11/12 xl:w-8/12 font-title text-justify w-64 text-xl text-gray">Go deeper in your key creation by self-creating your very own random entropy, bit by bit.</p>
          <div id="buttons-container" className="lg:flex lg:justify-center lg:items-center lg:gap-x-5 hidden">
            <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg transition-all hover:scale-105 active:scale-95 text-white" href="https://artsnl.app" target="_blank">
              Get Started
            </a>
            <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg transition-all hover:scale-105 active:scale-95 text-white" href="https://discord.gg/t2z36UvaTc" target="_blank">
              Chat With Us
            </a>
          </div>
        </div>

        <img src={buildBit} className="lg:block lg:scale-75 lg:translate-y-0 hidden" alt="generate-key-pair" />
        <div className="lg:hidden max-w-xs text-purple overflow-hidden">
          <span className="flex RightToLeft">
            <p>10101010101010110101010101010101</p>
            <p>10101010101010110101010101010101</p>
          </span>
          <span className="flex LeftToRight">
            <p>00101010101101100001010101011011</p>
            <p>00101010101101100001010101011011</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Block3
