document.getElementById('kill-overlay').addEventListener('click', () => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.executeScript(tabs[0].id, {
      file: 'content.js'
    });
  });
});