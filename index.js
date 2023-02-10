document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const pageText = document.getElementById('text');
    pageText.textContent = 'This is really cool!';
});


console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
