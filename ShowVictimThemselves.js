document.addEventListener("DOMContentLoaded", function () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                console.log("Camera access granted");
                var video = document.createElement("video");
                document.body.appendChild(video);
                video.srcObject = stream;
                video.play();
            })
            .catch(function (error) {
                console.error("Error accessing camera:", error);
            });
    } else {
        console.error("getUserMedia is not supported in this browser");
    }
});