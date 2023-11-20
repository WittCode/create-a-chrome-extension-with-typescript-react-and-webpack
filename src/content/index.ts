chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    const dogImg: HTMLImageElement = document.createElement('img');
    dogImg.src = msg;
    document.body.appendChild(dogImg);
  }
);