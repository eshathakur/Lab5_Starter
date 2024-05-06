// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    // references to HTML elements, use query selector for button
    const hornSelect = document.getElementById('horn-select');
    const hornImage = document.querySelector('#expose img');
    const hornAudio = document.querySelector('#expose audio');

    const playSoundButton = document.querySelector('#expose button'); 
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');

    // event listener for the horn select dropdown
    hornSelect.addEventListener('change', function() {
      updateHorn();
    });

    // event listener for the volume slider
    volumeSlider.addEventListener('input', function() {
      updateVolume();
    });

    // event listener for the "Play Sound" button
    playSoundButton.addEventListener('click', function() {
      playSound();
    });


  
    
    function updateHorn(){
      // Determine which horn option was selected
      const selectedHorn = hornSelect.value;
  
      // Update image and audio based on selected horn
      if (selectedHorn === 'air-horn') {
        hornImage.src = 'assets/images/air-horn.svg';
        hornAudio.src = 'assets/audio/air-horn.mp3';
      } else if (selectedHorn === 'car-horn') {
        hornImage.src = 'assets/images/car-horn.svg';
        hornAudio.src = 'assets/audio/car-horn.mp3';
      } else if (selectedHorn === 'party-horn') {
        hornImage.src = 'assets/images/party-horn.svg';
        hornAudio.src = 'assets/audio/party-horn.mp3';
      } else {
        hornImage.src = 'assets/images/no-image.png';
        hornAudio.src = '';
      }
    }

    function updateVolume() {
      // Get the current volume level from the slider
      const volumeLevel = volumeSlider.value;
  
      // set volume icon based on volume level
      if (volumeLevel == 0) {
        volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volumeLevel >= 1 && volumeLevel < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } else if (volumeLevel >= 33 && volumeLevel < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  
      // Set volume for the audio element
      hornAudio.volume = volumeLevel / 100;
    }

    //sound and confetti deoesnt work on chrome and safari

    //and shoot confetti only when the party horn is selected and play sound button is clicked
    function playSound() {
      // Play audio when button is clicked
      hornAudio.play();
  
      // if Party Horn is selected shoot confetti
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }




}