const resultElement = document.getElementById('result');
let recognition;

function startRecording(){
  //checking if the browser supports web API using conditional statements
  if('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    setupRecognition(recognition);
    recognition.start();
  } else {
    alert('Speech recognition not supported in this browser.');
  }
}

// function to setup the voice recognition

function setupRecognition(recognition){

  recognition.continuous = true;

  recognition.interimResults = true;

  recognition.lang = 'en-us';

  recognition.onresult = function(event){

    //processResult()
    const {finalTranscripts, interTranscripts} = processResults(event.results);
    resultElement.innerHTML = finalTranscripts + interTranscripts;
  }
}


//Function to process the result

function processResults(results){
  let finalTranscripts = "";
  let interTranscripts = "";
  for (let i = 0; i < results.length; i++){
    let transcript = results[i][0].transcript;
    transcript = transcript.replace(/\n/g, "<br>");
    if(results[i].isFinal){
      finalTranscripts += transcript;
    } else {
      interTranscripts += transcript;
    }
  }

  return {finalTranscripts, interTranscripts};
}






function stopRecording(){
  if (recognition) {
    recognition.stop();
  }
}