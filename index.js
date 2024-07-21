const btnLength = document.querySelectorAll(".btn").length;

for (let i = 0; i < btnLength; i++) {
  let btn = document.querySelectorAll(".btn")[i];
  btn.addEventListener("click", function () {
    let btnInnerText = this.innerText;
    playSound(btnInnerText);
    activeStyle(btnInnerText);
  });
}

document.addEventListener("keypress", (event) => {
  playSound(event.key);
  activeStyle(event.key);
});

function playSound(key) {
  switch (key) {
    case "a":
      const guitar = new Audio("./sound/guitar.mp3");
      guitar.play();
      break;
    case "b":
      const guitar2 = new Audio("./sound/guitar2.wav");
      guitar2.play();
      break;
    case "c":
      const guitar3 = new Audio("./sound/guitar3.mp3");
      guitar3.play();
      break;
    case "d":
      const guitar4 = new Audio("./sound/guitar4.mp3");
      guitar4.play();
      break;
    case "e":
      const guitar5 = new Audio("./sound/guitar5.mp3");
      guitar5.play();
      break;
    case "f":
      const guitar6 = new Audio("./sound/guitar6.mp3");
      guitar6.play();
      break;
    case "g":
      const guitar7 = new Audio("./sound/guitar7.mp3");
      guitar7.play();
      break;
    case "h":
      const drum4 = new Audio("./sound/drum4.mp3");
      drum4.play();
      break;
    case "i":
      const guitar8 = new Audio("./sound/guitar8.mp3");
      guitar8.play();
      break;
    case "j":
      const drum = new Audio("./sound/drum.mp3");
      drum.play();
      break;
    case "k":
      const drum2 = new Audio("./sound/drum2.mp3");
      drum2.play();
      break;
    case "l":
      const drum3 = new Audio("./sound/drum3.mp3");
      drum3.play();
      break;
    case "m":
      const guitar9 = new Audio("./sound/guitar9.mp3");
      guitar9.play();
      break;
    case "n":
      const guitar10 = new Audio("./sound/guitar10.mp3");
      guitar10.play();
      break;
    case "o":
      const guitar11 = new Audio("./sound/guitar11.mp3");
      guitar11.play();
      break;
    case "p":
      const guitar12 = new Audio("./sound/guitar12.mp3");
      guitar12.play();
      break;
    case "q":
      const guitar13 = new Audio("./sound/guitar13.mp3");
      guitar13.play();
      break;
    case "r":
      const guitar14 = new Audio("./sound/guitar14.mp3");
      guitar14.play();
      break;
    case "s":
      const guitar15 = new Audio("./sound/guitar15.mp3");
      guitar15.play();
      break;
    case "t":
      const guitar16 = new Audio("./sound/guitar16.mp3");
      guitar16.play();
      break;
    case "u":
      const guitar17 = new Audio("./sound/guitar17.mp3");
      guitar17.play();
      break;
    case "v":
      const guitar18 = new Audio("./sound/guitar18.mp3");
      guitar18.play();
      break;
    case "w":
      const guitar19 = new Audio("./sound/guitar19.mp3");
      guitar19.play();
      break;
    case "x":
      const guitar20 = new Audio("./sound/guitar20.mp3");
      guitar20.play();
      break;
    case "y":
      const guitar21 = new Audio("./sound/guitar21.mp3");
      guitar21.play();
      break;
    case "z":
      const guitar22 = new Audio("./sound/guitar22.mp3");
      guitar22.play();
      break;

    default:
      console.log("not playing");
      break;
  }
}

function activeStyle(currentkey) {
  const allBTN = document.querySelector("." + currentkey);
  allBTN.classList.add("active-style");
  setTimeout(() => {
    allBTN.classList.remove("active-style");
  }, 300);
}
