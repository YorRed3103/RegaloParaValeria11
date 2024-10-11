document.getElementById('gift').addEventListener('click', function() {
    document.getElementById('gift').classList.add('hidden');
    document.getElementById('surprise').classList.remove('hidden');
    
    // Reproducir música de fondo
    let audio = new Audio('we-fell-in-love-in-october.mp3');
    audio.play();
});
