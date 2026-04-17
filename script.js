const timeEl = document.getElementById('epoch-time');

function updateTime() {
    timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
