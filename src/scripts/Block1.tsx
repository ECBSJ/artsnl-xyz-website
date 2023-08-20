import generateKeyPairImg from "../assets/Generate-Key-Pair.png"

function Block1() {
  return (
    <>
      <div className="container w-80 h-screen relative flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <header className="absolute top-0 w-full h-16 flex justify-between items-center pt-9">
          <img className="w-10" src="https://i.imgur.com/5fv5p7q.png" alt="artsnl-icon" />
          <a className="w-40 h-12 flex justify-center items-center bg-purple rounded-lg text-white" href="https://artsnl.app" target="_blank">
            Open App
          </a>
        </header>
        <h1 className="mt-80 font-title text-4xl text-purple">INTRODUCING</h1>
        <p className="text-lg">
          The most hands-on, <br /> DIY approach to <br /> your crypto wallet.
        </p>
        <p className="font-title text-justify w-64 text-xl text-gray">Build your own key pair and transaction in the most artisanal manner.</p>
        <img src={generateKeyPairImg} className="scale-110 translate-y-4" alt="generate-key-pair" />
      </div>
    </>
  )
}

export default Block1
