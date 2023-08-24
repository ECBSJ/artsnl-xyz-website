import { SiTwitter, SiGithub, SiDiscord, SiGitbook, SiReadme } from "react-icons/si"
import { IconContext } from "react-icons"
import icon from "../assets/icon.svg"

function Block5() {
  return (
    <>
      <div className="snap-start snap-always lg:container lg:justify-center lg:gap-y-0 container w-80 h-screen flex flex-col justify-center items-center gap-y-5 bg-white dark:bg-darkPurple overflow-hidden">
        <div id="text-container" className="flex flex-col justify-center items-center gap-y-1">
          <img className="lg:w-20 lg:mb-7 w-10 mb-5 hover:animate-spin" src={icon} alt="artsnl-icon" />

          <h1 className="lg:text-3xl xl:text-4xl font-title text-xl text-purple">YOUR KEYS, DIY'ED BY YOU.</h1>

          <p className="lg:text-3xl text-lg">Follow ARTSNL</p>
        </div>

        <IconContext.Provider value={{ size: "1.2em", color: "#B01AF7" }}>
          <div className="lg:mt-8 flex justify-center items-center gap-x-7">
            <a href="https://twitter.com/ARTSNL" target="_blank">
              <SiTwitter />
            </a>
            <a href="https://github.com/ECBSJ/ARTSNL" target="_blank">
              <SiGithub />
            </a>
            <a href="https://discord.gg/t2z36UvaTc" target="_blank">
              <SiDiscord />
            </a>
            <a href="https://artsnl.gitbook.io/artsnl-knowledge-space/" target="_blank">
              <SiGitbook />
            </a>
            <a href="https://mirror.xyz/artsnl.eth" target="_blank">
              <SiReadme />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default Block5
