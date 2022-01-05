
  
  searchSound = () => {
    var input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    var x = document.getElementsByTagName("audio");
  
    for (i = 0; i < x.length; i++) {
      var sound = document
        .getElementsByTagName("audio")
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

  