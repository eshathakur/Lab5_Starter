// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // get references to HTML elements
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeakTextarea = document.getElementById('text-to-speak');
  const pressToTalkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');


  // check if Speech Synthesis is supported by browser
  if ('speechSynthesis' in window) {
    
    const voices = speechSynthesis.getVoices();
  
    populateVoices(voices);

    // //update available voices when voices change
    speechSynthesis.addEventListener('voiceschanged', function() {
      const updatedVoices = speechSynthesis.getVoices();
      populateVoices(updatedVoices);
    });

    //event listener for "Press to Talk" button
    pressToTalkButton.addEventListener('click', function() {
      speakText();
    });

  }
  else { 
    console.error('Speech Synthesis is not supported by your browser');
  }

  function populateVoices(voices) {
    // clear existing options (reset every time)
    voiceSelect.innerHTML = '';

    // create and add options for each available voice (populate)
    voices.forEach(function(voice) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  function speakText() {
    // get selected voice
    const selectedVoice = voiceSelect.value;

    // get text to speak
    const textToSpeak = textToSpeakTextarea.value;

    //SpeechSynthesisUtterance object with the text to speak
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // get selected voice
    const voices = speechSynthesis.getVoices();
    const selectedVoiceObject = voices.find(voice => voice.name === selectedVoice);

    // Set selected voice
    utterance.voice = selectedVoiceObject;

    //audio works on chrome not safari
    speechSynthesis.speak(utterance);

    function handleSynthesisStart() {
      faceImage.src = 'assets/images/open-mouthed.png';
    }

    function handleSynthesisEnd() {
      // back to the default
      faceImage.src = 'assets/images/smiling.png';

      // Remove event listeners after speech ends
      speechSynthesis.removeEventListener('start', handleSynthesisStart);
      speechSynthesis.removeEventListener('end', handleSynthesisEnd);
    }


  }


}