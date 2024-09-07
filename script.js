const alphabetButtons = document.querySelectorAll('.letter');
const quizContainer = document.getElementById('quiz-container');
const alphabetContainer = document.getElementById('alphabet-container');
const letterSoundContainer = document.getElementById('letter-sound');
let currentLetter = '';
let currentQuizData = []; // Almacena los datos de las tres imágenes del quiz actual

window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1;  
});

alphabetButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentLetter = button.getAttribute('data-letter');
        playLetterSound(currentLetter);
    });
});

function playLetterSound(letter) {
    if (letterSoundContainer) {
        // Muestra la letra seleccionada en el contenedor letter-sound
        letterSoundContainer.innerHTML = `<h2>${letter}</h2>`;
    }

    const audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
    audio.onended = () => {
        startQuiz(letter);
    };
}

function startQuiz(letter) {
    alphabetContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    // Obtiene los datos del quiz para la letra seleccionada y los guarda en una variable global
    currentQuizData = getQuizData(letter);

    // Asigna las imágenes a los elementos correspondientes
    document.getElementById('quiz-image-1').src = currentQuizData[0].image;
    document.getElementById('quiz-image-2').src = currentQuizData[1].image;
    document.getElementById('quiz-image-3').src = currentQuizData[2].image;
}

function getQuizData(letter) {
    const data = {
        'A': [
            { image: 'images/arbol.svg', answer: 'árbol' },
            { image: 'images/avion.svg', answer: 'avión' },
            { image: 'images/auto.svg', answer: 'auto' }
        ],
        'B': [
            { image: 'images/barco.svg', answer: 'barco' },
            { image: 'images/bicicleta.svg', answer: 'bicicleta' },
            { image: 'images/bota.svg', answer: 'bota'}
        ],
        'C': [
            { image: 'images/casa.svg', answer: 'casa' },
            { image: 'images/conejo.jpg', answer: 'conejo' },
            { image: 'images/caballo.jpg', answer: 'caballo' }
        ],
        'D': [
            { image: 'images/dado.jpg', answer: 'dado' },
            { image: 'images/diente.jpg', answer: 'diente' },
            { image: 'images/dinosaurio.jpg', answer: 'dinosaurio' }
        ],
        'E': [
            { image: 'images/elejante.jpg', answer: 'elefante' },
            { image: 'images/escoba.jpg', answer: 'escoba' },
            { image: 'images/estrella.svg', answer: 'estrella' }
        ],
        'F': [
            { image: 'images/flor.svg', answer: 'flor' },
            { image: 'images/foco.svg', answer: 'foco' },
            { image: 'images/fresa.svg', answer: 'fresa' }
        ],
        'G': [
            { image: 'images/gato.jpg', answer: 'gato' },
            { image: 'images/globo.svg', answer: 'globo' },
            { image: 'images/guitarra.svg', answer: 'guitarra' }
        ],
        'H': [
            { image: 'images/helado.svg', answer: 'helado' },
            { image: 'images/hormiga.svg', answer: 'hormiga' },
            { image: 'images/hueso.svg', answer: 'hueso' }
        ],
        'I': [
            { image: 'images/iglesia.svg', answer: 'iglesia' },
            { image: 'images/iman.svg', answer: 'iman' },
            { image: 'images/impresora.svg', answer: 'impresora' }
        ],
        'J': [
            { image: 'images/jaula.svg', answer: 'jaula' },
            { image: 'images/jeringa.svg', answer: 'jeringa' },
            { image: 'images/jirafa.svg', answer: 'jirafa' }
        ],
        'K': [
            { image: 'images/ketchup-29755.svg', answer: 'ketchup' },
            { image: 'images/kiwi-7127148.svg', answer: 'kiwi' },
            { image: 'images/koala.png', answer: 'koala' }
        ],
        'L': [
            { image: 'images/luna.svg', answer: 'luna' },
            { image: 'images/lupa.svg', answer: 'lupa' },
            { image: 'images/loro.png', answer: 'loro' }
        ],
        'M': [
            { image: 'images/manzana.svg', answer: 'manzana' },
            { image: 'images/martillo.svg', answer: 'martillo' },
            { image: 'images/mono.png', answer: 'mono' }
        ],
        'N': [
            { image: 'images/naranja.svg', answer: 'naranja' },
            { image: 'images/nariz.svg', answer: 'nariz' },
            { image: 'images/nube.svg', answer: 'nube' }
        ],
        'Ñ': [
            { image: 'images/dado.jpg', answer: 'dado' },
            { image: 'images/diente.jpg', answer: 'diente' },
            { image: 'images/dinosaurio.jpg', answer: 'dinosaurio' }
        ],
        'O': [
            { image: 'images/ojo.svg', answer: 'ojo' },
            { image: 'images/oso.svg', answer: 'oso' },
            { image: 'images/oveja.png', answer: 'oveja' }
        ],
        'P': [
            { image: 'images/pelota.svg', answer: 'pelota' },
            { image: 'images/pera.svg', answer: 'pera' },
            { image: 'images/pez.svg', answer: 'pez' }
        ],
        'Q': [
            { image: 'images/queso.svg', answer: 'queso' },
            { image: 'images/quirquincho.jpg', answer: 'quirquincho' },
            { image: 'images/Quena.jpg', answer: 'quena' }
        ],
        'R': [
            { image: 'images/raqueta.svg', answer: 'raqueta' },
            { image: 'images/raton.svg', answer: 'raton' },
            { image: 'images/reloj.svg', answer: 'reloj' }
        ],
        'S': [
            { image: 'images/sandia.svg', answer: 'sandia' },
            { image: 'images/sapo.svg', answer: 'sapo' },
            { image: 'images/sol.svg', answer: 'sol' }
        ],
        'T': [
            { image: 'images/tigre.svg', answer: 'tigre' },
            { image: 'images/tortuga.svg', answer: 'tortuga' },
            { image: 'images/tucan.svg', answer: 'tucan' }
        ],
        'U': [
            { image: 'images/unicornio.svg', answer: 'unicornio' },
            { image: 'images/uno.svg', answer: 'uno' },
            { image: 'images/uva.svg', answer: 'uva' }
        ],
        'V': [
            { image: 'images/vaca.svg', answer: 'vaca' },
            { image: 'images/veinte.svg', answer: 'veinte' },
            { image: 'images/volvan.svg', answer: 'volcan' }
        ],
        'W': [
            { image: 'images/whatsapp.svg', answer: 'whatsapp' },
            { image: 'images/wifi.svg', answer: 'wifi' },
            { image: 'images/wifi.svg', answer: 'wifi' }
        ],
        'X': [
            { image: 'images/xilofono.svg', answer: 'xilofono' },
            { image: 'images/xilofono.svg', answer: 'xilofono' },
            { image: 'images/xilofono.svg', answer: 'xilofono' }
        ],
        'Y': [
            { image: 'images/yegua.svg', answer: 'yegua' },
            { image: 'images/yema.svg', answer: 'yema' },
            { image: 'images/yogurt.svg', answer: 'yogurt' }
        ],
        'Z': [
            { image: 'images/zapato.svg', answer: 'zapato' },
            { image: 'images/zanahoria.svg', answer: 'zanahoria' },
            { image: 'images/zorro.svg', answer: 'zorro' }
        ]
    };

    // Selecciona tres imágenes y respuestas aleatorias para la letra dada
    const selectedData = [];
    const indexes = [];
    while (selectedData.length < 3) {
        const randomIndex = Math.floor(Math.random() * data[letter].length);
        if (!indexes.includes(randomIndex)) {
            selectedData.push(data[letter][randomIndex]);
            indexes.push(randomIndex);
        }
    }

    return selectedData;
}

function checkAnswers() {
    const inputs = document.querySelectorAll('.quiz-item input');
    let allCorrect = true;

    inputs.forEach((input, index) => {
        const userAnswer = input.value.toLowerCase();
        if (userAnswer === currentQuizData[index].answer) {
            showCorrectAnimation(input);
        } else {
            showIncorrectAnimation(input);
            allCorrect = false;
        }
    });

    if (allCorrect) {
        playSuccessSound(); // Reproduce el sonido de éxito si todas las respuestas son correctas
        setTimeout(restartGame, 4000); // Reinicia el juego después de 4 segundos
    }
}

function showCorrectAnimation(input) {
    const feedback = input.nextElementSibling;
    feedback.innerHTML = '😊'; // Emoji de cara feliz
    feedback.style.color = '#28a745';
}

function showIncorrectAnimation(input) {
    const feedback = input.nextElementSibling;
    feedback.innerHTML = '😢'; // Emoji de cara triste
    feedback.style.color = '#dc3545';
}

function playSuccessSound() {
    const audio = document.getElementById('success-sound');
    audio.play();
}

function restartGame() {
    quizContainer.style.display = 'none';
    alphabetContainer.style.display = 'block';
    document.querySelectorAll('.quiz-item input').forEach(input => input.value = '');
    document.querySelectorAll('.quiz-item span').forEach(span => span.innerHTML = '');
}
