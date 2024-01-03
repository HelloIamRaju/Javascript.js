function toggleDetails(button) {
  var parentDiv = button.parentElement;
  var details = parentDiv.querySelector('.details');
  var message = parentDiv.querySelector('.read-more-message');

  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block";
    button.innerHTML = "Read Less";
    showMessage(message);
  } else {
    message.style.display = "none";
    button.innerHTML = "Read More for better understanding >>";
    hideMessage(message);
  }
}

function showMessage(element) {
  element.style.display = "block";
}

function hideMessage(element) {
  element.style.display = "none";
}


//Code for reset scroll behaviour 

  window.onload = function() {
    window.scrollTo(0,0);
  };

history.pushState(null, null, window.location.href);
