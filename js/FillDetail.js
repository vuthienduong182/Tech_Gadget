
function displayCartDetails() {
  const items = JSON.parse(localStorage.getItem("title"));
  items.forEach((item) => {
    const subtitle = document.querySelector(".data__subtitle");
    const title = document.querySelector(".data__title");
    const desc = document.querySelector(".data__description");
    const image = document.querySelector(".tech__img");
    subtitle.innerHTML = item.subtitle
    title.innerHTML = item.title
    desc.innerHTML = item.description
    image.setAttribute = item.image
  });
}

displayCartDetails();
