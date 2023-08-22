import generateKeyPairImg from "../assets/Generate-Key-Pair.png"
import icon from "../assets/icon.png"

function Block1() {
  return (
    <>
      <div className="lg:container lg:flex-row lg:justify-center container w-80 h-screen relative flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <header className="absolute top-0 w-full h-16 flex lg:justify-start lg:gap-x-5 justify-between items-center pt-9 pl-2">
          <img className="w-10 hover:animate-spin" src={icon} alt="artsnl-icon" />
          <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg transition-all hover:scale-105 active:scale-95 text-white" href="https://artsnl.app" target="_blank">
            Open App
          </a>
        </header>
        <div id="text-container" className="lg:mt-0 lg:text-start lg:items-start lg:gap-y-7 lg:ml-24 2xl:ml-0 mt-80 flex flex-col justify-center items-center gap-y-5">
          <h1 className="font-title text-4xl text-purple">INTRODUCING</h1>
          <p className="lg:text-3xl xl:text-5xl text-lg">
            The most hands-on, <br /> DIY approach to <br /> your crypto wallet.
          </p>
          <p className="lg:text-xl lg:text-left lg:w-9/12 font-title text-justify w-64 text-xl text-gray">Build your own key pair and transaction in the most artisanal manner.</p>
          <div id="buttons-container" className="lg:flex lg:justify-center lg:items-center lg:gap-x-5 hidden">
            <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg transition-all hover:scale-105 active:scale-95 text-white" href="https://artsnl.app" target="_blank">
              Get Started
            </a>
            <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg transition-all hover:scale-105 active:scale-95 text-white" href="https://discord.gg/t2z36UvaTc" target="_blank">
              Chat With Us
            </a>
          </div>
        </div>
        <img src={generateKeyPairImg} className="lg:scale-75 lg:translate-y-0 scale-110 translate-y-4" alt="generate-key-pair" />
      </div>
    </>
  )
}

export default Block1
