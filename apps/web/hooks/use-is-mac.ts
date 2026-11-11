import * as React from "react"

export function useIsMac() {
  const [isMac, setIsMac] = React.useState(false)

  React.useEffect(() => {
    const platform =
      // @ts-expect-error userAgentData is not yet in all lib.dom.d.ts versions
      navigator.userAgentData?.platform ?? navigator.platform ?? ""
    setIsMac(/mac/i.test(platform))
  }, [])

  return isMac
}
