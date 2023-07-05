let mediaArray = [
  { id: "whatsapp", icon: `<i class="fa-brands fa-whatsapp"></i>` },
  { id: "whatsapp", icon: `<i class="fa-brands fa-whatsapp"></i>` },
  { id: "instagram", icon: `<i class="fa-brands fa-instagram"></i>` },
  { id: "instagram", icon: `<i class="fa-brands fa-instagram"></i>` },
  { id: "fb", icon: `<i class="fa-brands fa-facebook"></i>` },
  { id: "fb", icon: `<i class="fa-brands fa-facebook"></i>` },
  { id: "twitter", icon: `<i class="fa-brands fa-twitter"></i>` },
  { id: "twitter", icon: `<i class="fa-brands fa-twitter"></i>` },
  { id: "youtube", icon: `<i class="fa-brands fa-youtube"></i>` },
  { id: "youtube", icon: `<i class="fa-brands fa-youtube"></i>` },
  { id: "linkedin", icon: `<i class="fa-brands fa-linkedin"></i>` },
  { id: "linkedin", icon: `<i class="fa-brands fa-linkedin"></i>` },
];
const containerEl = document.querySelector(".container");
// Shuffle the media array
const shuffleArray = () => {
  for (let i = mediaArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mediaArray[i], mediaArray[j]] = [mediaArray[j], mediaArray[i]];
  }
};
const createMediaElements = () => {
  containerEl.innerHTML = "";
  mediaArray.forEach((item) => {
    const mediaDiv = document.createElement("div");
    mediaDiv.setAttribute("class", "media-box");
    mediaDiv.setAttribute("data-id", `${item.id}`);
    const frontSide = document.createElement("div");
    frontSide.setAttribute("class", "front-side");
    frontSide.textContent = "Click me";
    const backSide = document.createElement("div");
    backSide.setAttribute("class", "back-side");
    backSide.innerHTML = `${item.icon}`;
    mediaDiv.appendChild(frontSide);
    mediaDiv.appendChild(backSide);
    containerEl.appendChild(mediaDiv);
  });
};
let clicked = 0;
let mediaIdOne;
let mediaIdTwo;
let clicks = 0;
document.querySelector(".steps").textContent= clicks;

let completed =0;

const checkMemory = (event) => {
  clicked++;
  if (clicked === 1) {
    event.target.parentElement.classList.add("show");
    mediaIdOne = event.target.parentElement.getAttribute("data-id");
  } else {
    event.target.parentElement.classList.add("show");
    mediaIdTwo = event.target.parentElement.getAttribute("data-id");
    console.log(mediaIdOne);
    console.log(mediaIdTwo);
    if (mediaIdOne !== mediaIdTwo) {
      const showedElementOne = document.querySelectorAll(
        `[data-id="${mediaIdOne}"]`
      );
      const showedElementTwo = document.querySelectorAll(
        `[data-id="${mediaIdTwo}"]`
      );
      setTimeout(() => {
        showedElementOne[0].classList.remove("show");
        showedElementOne[1].classList.remove("show");
        showedElementTwo[0].classList.remove("show");
        showedElementTwo[1].classList.remove("show");
      }, 2000);
    } else {
        completed++;
    }
    clicks++;
    clicked = 0;
    document.querySelector(".steps").textContent= clicks;
  }
};
shuffleArray();
createMediaElements();
const mediaBox = document.querySelectorAll(".media-box");
mediaBox.forEach((box) => {
  box.addEventListener("click", function (event) {
    checkMemory(event);
  });
});
