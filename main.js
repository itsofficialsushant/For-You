<script>
    import { particlesCursor } from 
    'https://unpkg.com/threejs-toy@0.0.8/build/threejs-toys.module.cdn.min.js'

    const pc = particlesCursor({
        el: document.getElementById('app'),
        gpgpuSize: 512, color: 0xfff,
        colours: [0x00fffc, 0x00fffc],
        coordScale: 0.5, pointSize: 2,
        noiseIntensity: 0.005,
        noiseTimeCoef: 0.0001,
        pointDecay: 0.0025,
        sleepRadiusX: 250,
        sleepRadiusY: 250,
        SleepTimeCoefX: 0.001,
        SleepTimeCoefY: 0.002
    });



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
