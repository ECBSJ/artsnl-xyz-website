import { useRef, useEffect } from "react"
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
  let BLref = useRef<HTMLImageElement>(null!)
  let BCref = useRef<HTMLImageElement>(null!)
  let BRref = useRef<HTMLImageElement>(null!)
  let MLref = useRef<HTMLImageElement>(null!)
  let MRref = useRef<HTMLImageElement>(null!)
  let TLref = useRef<HTMLImageElement>(null!)
  let TCref = useRef<HTMLImageElement>(null!)
  let TRref = useRef<HTMLImageElement>(null!)

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll("#brick").forEach(brick => {
          brick.classList.add("opacity-100")
          brick.classList.add("translate-y-0")
          brick.classList.remove("translate-y-[-600px]")
        })

        observer.unobserve(entries[0].target)
      }
    },
    { threshold: 0.5 }
  )

  useEffect(() => {
    observer.observe(document.getElementById("middleRow")!)
  }, [])

  return (
    <>
      <div className="lg:container lg:justify-center lg:gap-y-0 container w-80 h-screen flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <div id="text-container" className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="lg:text-3xl xl:text-4xl font-title text-2xl text-purple">SELF-CONSTRUCTED</h1>

          <p className="lg:text-2xl font-title text-xl text-gray">A wallet, made by you.</p>

          <p className="text-3xl">
            Brick by brick. <br /> Bit by bit.
          </p>
        </div>

        <div className="lg:w-[485px] lg:h-[482px] lg:scale-90 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-8" id="icon-container">
          <img className="lg:hidden scale-110 translate-y-8" src={icon} alt="icon-logo" />
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-8">
            <img className="hover:cursor-grabbing hover:-translate-x-9 hover:-translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[500ms]" id="brick" ref={TLref} src={TL} alt="tl" />
            <img className="hover:cursor-grabbing hover:-translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[600ms]" id="brick" ref={TCref} src={TC} alt="tc" />
            <img className="hover:cursor-grabbing hover:translate-x-9 hover:-translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[700ms]" id="brick" ref={TRref} src={TR} alt="tr" />
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-5" id="middleRow">
            <img className="hover:cursor-grabbing hover:-translate-x-20 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[300ms]" id="brick" ref={MLref} src={ML} alt="ml" />
            <img className="hover:cursor-grabbing hover:translate-x-20 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[400ms]" id="brick" ref={MRref} src={MR} alt="mr" />
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-8">
            <img className="hover:cursor-grabbing hover:-translate-x-9 hover:translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in" id="brick" ref={BLref} src={BL} alt="bl" />
            <img className="hover:cursor-grabbing hover:translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[100ms]" id="brick" ref={BCref} src={BC} alt="bc" />
            <img className="hover:cursor-grabbing hover:translate-x-9 hover:translate-y-9 opacity-0 translate-y-[-600px] transition-all duration-150 ease-in delay-[200ms]" id="brick" ref={BRref} src={BR} alt="br" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Block2
