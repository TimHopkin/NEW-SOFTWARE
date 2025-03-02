document.addEventListener('DOMContentLoaded', () => {
    const helloText = document.getElementById('hello-text');
    const changeBtn = document.getElementById('change-btn');
    const container = document.querySelector('.container');
    
    // Array of fun greetings
    const greetings = [
        'Hello World!', 
        'Bonjour le Monde!', 
        'Hola Mundo!', 
        'Ciao Mondo!', 
        'Hallo Welt!',
        '你好世界!',
        'こんにちは世界!',
        'Привет мир!'
    ];
    
    // Array of fun colors
    const colors = [
        'to right, #ff8a00, #e52e71', 
        'to right, #4facfe, #00f2fe', 
        'to right, #43e97b, #38f9d7', 
        'to right, #fa709a, #fee140',
        'to right, #6a11cb, #2575fc',
        'to right, #ff0844, #ffb199',
        'to right, #74ebd5, #acb6e5',
        'to right, #f43b47, #453a94'
    ];
    
    // Array of background gradients
    const backgrounds = [
        '135deg, #70e1f5, #ffd194',
        '135deg, #a1c4fd, #c2e9fb',
        '135deg, #f5f7fa, #c3cfe2',
        '135deg, #ebc0fd, #d9ded8',
        '135deg, #96fbc4, #f9f586',
        '135deg, #fccb90, #d57eeb',
        '135deg, #e0c3fc, #8ec5fc',
        '135deg, #f093fb, #f5576c'
    ];
    
    let currentIndex = 0;

    // Function to change greeting and colors
    changeBtn.addEventListener('click', () => {
        // Update index
        currentIndex = (currentIndex + 1) % greetings.length;
        
        // Change text with animation
        helloText.classList.add('animate');
        
        // Change text and colors
        setTimeout(() => {
            helloText.textContent = greetings[currentIndex];
            helloText.style.background = `linear-gradient(${colors[currentIndex]})`;
            document.body.style.background = `linear-gradient(${backgrounds[currentIndex]})`;
            
            // Fun 3D effect on container
            container.style.transform = `perspective(1000px) rotateY(${Math.random() * 10 - 5}deg) rotateX(${Math.random() * 10 - 5}deg)`;
            
            // Remove animation class after changing
            setTimeout(() => {
                helloText.classList.remove('animate');
            }, 1000);
        }, 500);
    });

    // Easter egg: shake text when you hover over it
    helloText.addEventListener('mouseover', () => {
        if (!helloText.classList.contains('animate')) {
            helloText.classList.add('animate');
            setTimeout(() => {
                helloText.classList.remove('animate');
            }, 1000);
        }
    });
});