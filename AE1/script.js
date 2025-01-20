
// Exercici 1
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-paragraph').textContent = 'NUEVO TEXTOOOOOOO';
});

// Exercici 2

document.getElementById('change-bg-button').addEventListener('click', function() {
    // Obtenemos el valor actual del campo color
    let color = document.getElementById('color-input').value;
    if (color) {
        // Lo aplicamos al div
        document.getElementById('background-div').style.backgroundColor = color;
    };
})

// Exercici 3

document.getElementById('alert-button').addEventListener('click', function() {
    let value = document.getElementById('alert-input').value;

    // Validamos si existe input y creamos alerta si existe
    if (value) {
        alert(value);
    }
})

// Exercici 4

// Definimos las constantes que vamos a utilizar mas adelante en este ejercicio
const NOT_VALID_MAIL_ERROR = 'Not a valid mail address!'
const ALERT_MAIL = document.getElementById('email-error')

// Funcion para validar si es o no un mail
function isMail(mail) {
    // Verificamos si contiene exactamente un '@' y un '.'
    const posicionArroba = mail.indexOf('@');
    const posicionPunto = mail.indexOf('.', posicionArroba);

    // Realizamos comprobaciones varias para ver si es o no una URL
    if (posicionArroba > 0 && posicionPunto > posicionArroba + 1 && posicionPunto < mail.length - 1) {
        return true;
    }
    return false;
};

document.getElementById('validate-email-button').addEventListener('click', function() {
    let mail = document.getElementById('email-input').value;

    // Si no es mail, mostramos una alerta
    // Si es mail y la alerta esta mostrada, la dejamos de mostrar
    if (!isMail(mail)) {
        ALERT_MAIL.textContent = NOT_VALID_MAIL_ERROR;
    } else if (ALERT_MAIL.value != '') {
        ALERT_MAIL.textContent = '';
    };
})

// Exercici 5

// Obtenemos el elemento que obtendremos mas adelante
const HIDEME = document.getElementById('hide-me')

// Al hacer click en el boton, se aplica el estilo 'display: none' al elemento, lo que lo oculta
document.getElementById('hide-button').addEventListener('click', function() {
    HIDEME.style.display = 'none';
});

// Exercici 6

const HIDEME2 = document.getElementById('toggle-div');

document.getElementById('toggle-button').addEventListener('click', function() {
    // Si no esta mostrado, lo mostramos
    // Si esta mostrado, lo dejamos de mostrar
    if (HIDEME2.style.display == 'none') {
        HIDEME2.style.display = 'block';
    } else {
        HIDEME2.style.display = 'none';
    };
});

// Exercici 7

// Definimos el elemento de la lista donde iremos agregando los elementos que vayamos introduciendo
const LISTA = document.getElementById('item-list');

document.getElementById('add-item-button').addEventListener('click', function() {
    let VALOR_LISTA = document.getElementById('list-item-input').value;
    if (VALOR_LISTA.trim() != '') {
        let elementoNuevo = document.createElement('li');
        
        // Asignar texto al nuevo elemento
        elementoNuevo.textContent = VALOR_LISTA;
        
        // Agregar el nuevo elemento al final de la lista
        LISTA.appendChild(elementoNuevo);
    } else {
        alert('No se ha introducido nada!')
    };
});

// Exercici 8

// Definimos un contador
let i = 0;

// En cada click, incrementamos en uno el contador y cambiamos el valor del parrafo al valor actual del contador
document.getElementById('increment-button').addEventListener('click', function() {
    i += 1;
    document.getElementById('counter').textContent = i;
});


// Exercici 9

// Definimos las constantes que luego usaremos
const HOVER_CUADRADO = document.getElementById('hover-div');
const HOVER_P = document.getElementById('hover-paragraph');
const DEFAULT_HOVER_TEXT = 'Passa el ratolí per sobre del div.';
const CUSTOM_HOVER_TEST = 'Ya estas passant el ratoli!!!!'

// Si el mouse esta encima
HOVER_CUADRADO.addEventListener('mouseover', function() {
    HOVER_P.textContent = CUSTOM_HOVER_TEST;
});

// SI el mouse deja de estar encima
HOVER_CUADRADO.addEventListener('mouseleave', function() {
    HOVER_P.textContent = DEFAULT_HOVER_TEXT;
});

// Exercici 10

document.getElementById('change-image-button').addEventListener('click', function() {
    // Obtenemos la URL del input del usuario
    let url = document.getElementById('image-url-input').value;

    // Si hay URL, la cargamos en el SRC de la imagen
    // TODO: Validar si es URL valida o si hay error en la request
    if (url) {
        document.getElementById('image').src = url;
    } else {
        alert('Introduce una URL!')
    };
});

// Prueba realizada con: https://cdn2.iconfinder.com/data/icons/plump-by-zerode_/256/Filetype-png-icon.png