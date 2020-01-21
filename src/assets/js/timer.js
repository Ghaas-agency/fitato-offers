var countDownDate = new Date("January 31, 2020 23:59:59").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance / (1000 * 60 * 60)));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time-left").innerHTML = hours + ":" + minutes + ":" + seconds + " left till the offer ends.";
  document.getElementById('offer-data').style.display = 'block';

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-left").innerHTML = "Offer expired!";
    document.getElementById('offer-data').innerHTML = '<p class="red bold" style="font-size: 2em; margin-top: 45px">Offer expired!</p>';
  }
}, 1000);
