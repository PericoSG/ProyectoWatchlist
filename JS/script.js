document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPause");
    const rewindBtn = document.getElementById("rewind");
    const forwardBtn = document.getElementById("forward");
    const progressBar = document.getElementById("progressBar");

    // Play y pausa
    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸️ Pausa";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶️ Play";
        }
    });

    // Retroceder 10 segundos
    rewindBtn.addEventListener("click", () => {
        audio.currentTime -= 10;
    });

    // Avanzar 10 segundos
    forwardBtn.addEventListener("click", () => {
        audio.currentTime += 10;
    });

    // Actualizar barra de progreso
    audio.addEventListener("timeupdate", () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    // Permitir que el usuario ajuste la barra de progreso
    progressBar.addEventListener("input", () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });
});
