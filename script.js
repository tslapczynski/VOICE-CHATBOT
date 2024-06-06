// Twój istniejący kod JavaScript 

// Dodaj event listener do ikony mikrofonu
const microphoneIcon = document.getElementById('microphone-icon');
const recordingIcon = document.getElementById('recording-icon');
let isRecording = false;

microphoneIcon.addEventListener('click', () => {
  if (!isRecording) {
    startRecording();
  } else {
    stopRecording();
  }
});

function startRecording() {
  // Implementacja nagrywania głosu (patrz krok 2)
  // ...

  microphoneIcon.classList.add('hidden');
  recordingIcon.classList.remove('hidden');
  isRecording = true;
}

function stopRecording() {
  // Implementacja zatrzymania nagrywania (patrz krok 2)
  // ...

  microphoneIcon.classList.remove('hidden');
  recordingIcon.classList.add('hidden');
  isRecording = false;
}

// Funkcja konwersji mowy na tekst (patrz krok 3)
function speechToText(audioBlob) {
  // ...
}

// Funkcja konwersji tekstu na mowę (patrz krok 4)
function textToSpeech(text) {
  // ...
}