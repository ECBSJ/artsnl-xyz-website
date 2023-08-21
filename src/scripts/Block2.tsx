import icon from "../assets/icon.svg"
import TL from "../assets/TL.svg"
import TC from "../assets/TC.svg"
import TR from "../assets/TR.svg"
import ML from "../assets/ML.svg"
import MR from "../assets/MR.svg"
import BL from "../assets/BL.svg"
import BC from "../assets/BC.svg"
import BR from "../assets/BR.svg"

function Block2() {
  return (
    <>
      <div className="lg:container lg:justify-end lg:gap-y-0 container w-80 h-screen flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <div id="text-container" className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="lg:text-3xl font-title text-2xl text-purple">SELF-CONSTRUCTED</h1>

          <p className="lg:text-2xl font-title text-xl text-gray">A wallet, made by you.</p>

          <p className="text-3xl text-darkPurple">
            Brick by brick. <br /> Bit by bit.
          </p>
        </div>

        <div className="lg:w-[485px] lg:h-[482px] lg:scale-90 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-8" id="icon-container">
          <img className="lg:hidden scale-110 translate-y-8" src={icon} alt="icon-logo" />
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-8">
            <img src={TL} alt="tl" />
            <img src={TC} alt="tc" />
            <img src={TR} alt="tr" />
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-5">
            <img src={ML} alt="ml" />
            <img src={MR} alt="mr" />
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-8">
            <img src={BL} alt="bl" />
            <img src={BC} alt="bc" />
            <img src={BR} alt="br" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Block2
