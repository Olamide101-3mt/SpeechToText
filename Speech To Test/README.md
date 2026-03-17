# Speech to Text Converter

A simple web-based application that converts speech to text using the Web Speech API.

## Description

This project demonstrates the use of the Web Speech API to perform real-time speech recognition. Users can start recording their voice, and the application will transcribe the speech into text, displaying both interim and final results.

## Features

- **Real-time Speech Recognition**: Converts spoken words into text as you speak.
- **Interim and Final Transcripts**: Shows partial results while speaking and finalizes the text when speech pauses.
- **Start/Stop Controls**: Buttons to begin and end recording.
- **Responsive Design**: Styled interface with a clean, modern look.

## How to Use

1. Open `speechToTest.html` in a web browser that supports the Web Speech API (e.g., Google Chrome).
2. Click the microphone button to start recording.
3. Speak clearly into your microphone.
4. The transcribed text will appear in the result box in real-time.
5. Click the stop button to end recording.

## Requirements

- A modern web browser with support for the Web Speech API (primarily Chrome, Edge, and Safari).
- Microphone access must be granted when prompted.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling for layout and appearance.
- **JavaScript**: Implementation of speech recognition using the Web Speech API.

## File Structure

- `speechToTest.html`: Main HTML file.
- `script.js`: JavaScript code for speech recognition.
- `style.css`: CSS styles for the interface.
- `README.md`: This file.

## Notes

- The Web Speech API may not work in all browsers or environments. For best results, use Google Chrome.
- Ensure your microphone is enabled and permissions are granted for speech input.