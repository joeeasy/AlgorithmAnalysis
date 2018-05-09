export const delay = (value, timer) => {
  return setTimeout(()=> (value), timer)
}

export const loaderOption = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.0,
  corners: 1,
  color: "#fff",
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: "50%",
  left: "50%",
  shadow: false,
  hwaccel: false,
  position: "absolute"
}
