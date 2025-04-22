var musica = document.getElementById('miMusica');
musica.volume = 0.05; // volumen al 20%

function togglePlayPause() {
    var playPauseIcon = document.getElementById('playPauseIcon');

    if (musica.paused) {
        musica.play();
        playPauseIcon.className = "fas fa-pause"; 
    } else {
        musica.pause();
        playPauseIcon.className = "fas fa-play"; 
    }
}
