const toggleViewportOverflow = (isHidden: boolean) => {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  if (isHidden) {
    if (body) {
      body.style.overflow = "hidden";
    }
    if (html) {
      html.style.overflow = "hidden";
    }
  } else {
    setTimeout(() => {
      if (body) {
        body.style.overflow = "auto";
      }
      if (html) {
        html.style.overflow = "auto";
      }
    }, 0);
  }
};

export default toggleViewportOverflow;
