export default () => {
  const isMobileDevice = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ]

    return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem))
  }

  return isMobileDevice()
}
