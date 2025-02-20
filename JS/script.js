document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPause");
    const rewindBtn = document.getElementById("rewind");
    const forwardBtn = document.getElementById("forward");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    // Función para formatear el tiempo en minutos y segundos
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Actualizar el tiempo actual y la duración total
    function updateTimeDisplay() {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        durationDisplay.textContent = formatTime(audio.duration);
    }

    // Play y pausa
    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "<span>⏸️ Pausa</span>";
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "<span>▶️ Play</span>";
        }
    });
    // Retroceder 10 segundos
    rewindBtn.addEventListener("click", () => {
        audio.currentTime -= 10;
        updateTimeDisplay();
    });

    // Avanzar 10 segundos
    forwardBtn.addEventListener("click", () => {
        audio.currentTime += 10;
        updateTimeDisplay();
    });

    // Actualizar barra de progreso y tiempo
    audio.addEventListener("timeupdate", () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        updateTimeDisplay();
    });

    // Permitir que el usuario ajuste la barra de progreso
    progressBar.addEventListener("input", () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
        updateTimeDisplay();
    });

    // Actualizar la duración total cuando el audio esté listo
    audio.addEventListener("loadedmetadata", () => {
        updateTimeDisplay();
    });
    
    
});