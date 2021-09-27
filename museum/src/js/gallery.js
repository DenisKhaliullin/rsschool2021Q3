function newPicture () {
    const pictureInnerContainer = document.querySelector('.picture-inner__wrapper');

const img = `<img class="gallery-img" src="../museum/assets/img/galery/galery1.jpg" alt="galery1">`;
pictureInnerContainer.innerHTML = img;

}
