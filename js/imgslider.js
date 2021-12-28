// seemore slides
const visibleImages = document.querySelectorAll(".gallery-items-see-more");
const seemoreImagesBox = document.querySelector(".gallery-items-see-more");
const seeMoreBtn = document.querySelector(".see-more-btn");
// const totalImages = document.querySelectorAll(".click-me-img");
// totalImages.forEach((img) => {
//   img.addEventListener("click", () => {
//     seemoreImagesBox.classList.add("show-me");
//     console.log(totalImages);
//     console.log(seemoreImagesBox);
//   });
// });

// body scroll prevent
const documentBody = document.querySelector(".body");

// see more images btn
seeMoreBtn.addEventListener("click", () => {
  console.log(smsCloseBtn);
  seemoreImagesBox.classList.add("show-me");
  documentBody.classList.add("no-scroll-y");
});
const smsCloseBtn = document.querySelector(".sms-close-btn");
smsCloseBtn.addEventListener("click", () => {
  console.log(smsCloseBtn);
  seemoreImagesBox.classList.remove("show-me");
  documentBody.classList.remove("no-scroll-y");
});
