

click.addEventListener("click", function() {
    var speech = true;
    if (speech) {
        window.SpeechRecognition = window.webkitSpeechRecognition;//is to provide cross-browser compatibility when using the Web Speech API for speech recognition in web applications.
        const recognition = new SpeechRecognition();
        recognition.interimResult = true; //continuously updating with partial recognition results.

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

          
            // Assuming `convert_text` is the ID of an HTML element
            const convertText = document.getElementById('convert_text');
            convertText.innerHTML += transcript + ' '; // Append the new transcript with a space

            // Optionally, you can also add line breaks for better readability
            // convertText.innerHTML += transcript + '<br>'; 

            // Scroll to the bottom to always show the latest content
            convertText.scrollTop = convertText.scrollHeight;
        });

        recognition.start();
    }
});

