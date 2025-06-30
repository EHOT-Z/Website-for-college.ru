// Получаем элементы
var modal = document.getElementById("modal");
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на миниатюру, открываем модальное окно
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src; // Устанавливаем источник большого изображения
    captionText.innerHTML = this.alt; // Устанавливаем текст подписи
}

// Когда пользователь кликает на (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне изображения, закрываем модальное окно
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


