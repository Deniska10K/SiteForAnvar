function nextPage() {
    window.location.href = "pages/yes.html";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 100;
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 50;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}