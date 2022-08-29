console.log(navigator);
// navigator.mediaDevices.getUserMedia({video: true})
// .then(videoStream => {
//     let videoplayer = document.getElementById('videoplayer');
//     videoplayer.srcObject = videoStream;
//     videoplayer.play();
// });


navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position)
})