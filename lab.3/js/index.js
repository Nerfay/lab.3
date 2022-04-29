document.querySelector('.knopka').addEventListener('click', function () {
    document.querySelector('.conteiner_box').classList.add('visible_window');
});

 document.querySelector('.overlay_box').addEventListener('click', function () {
    document.querySelector('.conteiner_box').classList.remove('visible_window');
});
