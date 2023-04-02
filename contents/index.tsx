import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import { useRef } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://chat.openai.com/*"],
  all_frames: true
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => document.querySelector('main')

const CustomButton = () => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <button
      style={{
        margin: "0 auto",
        marginBottom: "1rem",
        zIndex: 9999
      }}
      ref={ref}
      onClick={async () => {
        const main = document.querySelector("main")
        main.classList.remove("overflow-hidden")
        main.children[0].classList.remove("overflow-hidden")
        main.children[1].remove()
        document.body.innerHTML = ""
        document.body.appendChild(main)
        ref.current.remove()
      }}>
      Prepare for full page screenshot, PDF or print
    </button>
  )
}

export default CustomButton
