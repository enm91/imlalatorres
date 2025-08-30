function scaleContent() {
  const content = document.querySelector('.card');
  const baseWidth = 800;
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  if (windowWidth < 1500) {
    if (windowWidth > baseWidth) {
      const scale = windowWidth / baseWidth;
      content.style.transform = `scale(${scale})`;
    } else {
      content.style.transform = 'scale(1)';
    }
  } else {
    content.style.transform = window.innerWidth;
  }
}

window.addEventListener('resize', scaleContent);
scaleContent();
