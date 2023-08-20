import { SiTwitter, SiGithub, SiDiscord, SiGitbook, SiReadme } from "react-icons/si"
import { IconContext } from "react-icons"

function Placeholder() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a href="https://artsnl.app" target="_blank">
          <img className="logo" src="https://i.imgur.com/5fv5p7q.png" alt="artsnl-icon" />
        </a>
        <h1 className="text-purple font-text text-6xl ml-3">ARTSNL</h1>
      </div>

      <p style={{ color: "gray" }}>
        Main website for <code>artsnl.xyz</code> is still under construction.
      </p>
      <p>Try our beta app by clicking the purple icon above!</p>

      <p style={{ fontSize: ".7rem", color: "mediumpurple", marginTop: "50px" }}>Follow Us & Stay Updated</p>
      <IconContext.Provider value={{ size: "1.2em", color: "#B01AF7" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "28px", color: "#B01AF7" }} className="social-media-icons">
          <a href="https://twitter.com/ARTSNL" target="_blank">
            <SiTwitter className="social-media-icons__link" />
          </a>
          <a href="https://github.com/ECBSJ/ARTSNL" target="_blank">
            <SiGithub className="social-media-icons__link" />
          </a>
          <a href="https://discord.gg/t2z36UvaTc" target="_blank">
            <SiDiscord className="social-media-icons__link" />
          </a>
          <a href="https://artsnl.gitbook.io/artsnl-knowledge-space/" target="_blank">
            <SiGitbook className="social-media-icons__link" />
          </a>
          <a href="https://mirror.xyz/artsnl.eth" target="_blank">
            <SiReadme className="social-media-icons__link" />
          </a>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Placeholder
