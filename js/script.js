myFunc = function() {
    let quotes = [
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Programs are meant to be read by humans and only incidentally for computers to execute. — Donald Knuth",
    "The most dangerous phrase in the language is: 'We’ve always done it this way.' — Grace Hopper",
    "Everybody should learn to program a computer, because it teaches you how to think. — Steve Jobs",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",
    "Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. — Edsger Dijkstra",
    "We can only see a short distance ahead, but we can see plenty there that needs to be done. — Alan Turing",
    "There are only tswo kinds of programming languages: those people always complain about and those nobody uses. — Bjarne Stroustrup",
    "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function. — John Carmack",
    "Debugging is twice as hard as writing the code in the first place. — Brian Kernighan",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie"];

    function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * 11);
    document.getElementById("myBox").innerHTML = quotes[randomIndex];

    setTimeout(showRandomQuote, 3000); 
    }

    showRandomQuote();
}

timeFunc = function() {
    let currentTime = new Date();
    currentTime.getHours();   // 16
    currentTime.getMinutes(); // 24
// Київ (без змін)
    document.getElementById("current-time").innerHTML = (currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()); // Форматування працює неправильно для годин та хвилин менших за 10
// Лондон (-2 години від Києва)
    document.getElementById("current-time-london").innerHTML = (currentTime.getHours() - 2 < 10 ? "0" + (currentTime.getHours() - 2) : currentTime.getHours() - 2) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
// Астана (+2 години від Києва)
    document.getElementById("current-time-astana").innerHTML = (currentTime.getHours() + 2 < 10 ? "0" + (currentTime.getHours() + 2) : currentTime.getHours() + 2) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
// Токіо (+6 годин від Києва) 
    document.getElementById("current-time-tokyo").innerHTML = (currentTime.getHours() + 6 < 10 ? "0" + (currentTime.getHours() + 6) : currentTime.getHours() + 6) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
}

function timeASM() {
    let a = 10;
    let b = 5;

    let result = "";
    result += "Сума: " + (a + b) + "<br>";
    result += "Різниця: " + (a - b) + "<br>";


    document.getElementById("math5").innerHTML = result;

    alert("Добуток: " + (a * b));
    alert("Частка: " + (a / b));
}

function bigImg(x) {
  x.style.height = "260px";
  x.style.width = "340px";
}

function normalImg(x) {
  x.style.height = "240px";
  x.style.width = "320px";
}

// виклик функції після завантаження сторінки
window.onload = timeASM; // виклик гарантує, що функція виконається після завантаження сторінки

myFunc();
timeFunc();
