import { useEffect, useState } from "react"

export function useWidowFocus() {
  const [state, setState] = useState("")
  const getFocus = () => {
    if (document.visibilityState === "visible") {
      // page is visible
      setState("visible")
    } else {
      // page is hidden
      setState("hidden")
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", getFocus)
    return () => {
      document.removeEventListener("visibilitychange", getFocus)
    }
  }, [])

  return { state }
}
