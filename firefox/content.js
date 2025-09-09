const zIndices = [];

function findHighestZIndex() {
  const elements = document.getElementsByTagName('*');
  let highestZIndex = 0;

  for (let i = 0; i < elements.length; i++) {
    const zIndex = parseInt(window.getComputedStyle(elements[i]).zIndex, 10);
    if (zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  }

  return highestZIndex;
}

function killOverlays() {
  const highestZIndex = findHighestZIndex();
  const potentialOverlays = [];

  if (highestZIndex > 100) {
    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      const zIndex = parseInt(window.getComputedStyle(elements[i]).zIndex, 10);
      if (zIndex === highestZIndex) {
        potentialOverlays.push(elements[i]);
      }
    }

    potentialOverlays.forEach(element => {
      element.style.display = 'none';
    });
  }

  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}

killOverlays();