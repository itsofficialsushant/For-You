<script>
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

const textContainer = document.getElementById('text-container');
        const phrases = ["Hello, World!", "JavaScript is fun!", "Animations are amazing!"];
        let index = 0;

        setInterval(() => {
            index = (index + 1) % phrases.length; // Cycle through phrases
            textContainer.textContent = phrases[index];
        }, 4000); // Change text every 4 seconds
</script>
