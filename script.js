let ecran = document.getElementById("ecran");

function appendCharacter(char) {
    ecran.innerText += char;
}

function clearScreen() {
    ecran.innerText = '';
}

function deleteLast() {
    ecran.innerText = ecran.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        ecran.innerText = eval(ecran.innerText);
    } catch (error) {
        ecran.innerText = 'Erreur';
    }
}
