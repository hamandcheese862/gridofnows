
  
  searchSound = () => {
    var input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    var x = document.getElementsByClassName ("audio1");
  
    for (i = 0; i < x.length; i++) {
      var sound = document
        .getElementsByClassName("audio1")
        [i].getAttribute("data-sound");

  
      if (!sound.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "inline-block";
      }
    }
  };
  
  document
    .getElementById("search-bar")
    .addEventListener("keyup", searchSound);


    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
    });

    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }

    var teaKettle = document.getElementById("teaKettle1"),
  ctrl = document.getElementById("audioControl1"),
  playButton = document.getElementById("play1"),
  pauseButton = document.getElementById("pause1");
teaKettle1.currentTime = 0;

function toggleButton() {
  if (playButton.style.display === "none") {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  } else {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  }
}

ctrl.onclick = function () {
  if (teaKettle.paused) {
    teaKettle.play();
  } else {
    teaKettle.pause();
  }

  toggleButton();

  return false;
};
