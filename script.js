document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("live-stream").innerHTML =
            '<iframe width="100%" height="340" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" ' +
            'title="Transmissão ao vivo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
            'allowfullscreen></iframe>';
    }, 3000);
});