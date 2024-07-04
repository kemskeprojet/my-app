const calculator = {
    appendCharacter: function(ecran, char) {
        ecran.innerText += char;
    },

    clearScreen: function(ecran) {
        ecran.innerText = '';
    },

    deleteLast: function(ecran) {
        ecran.innerText = ecran.innerText.slice(0, -1);
    },

    calculateResult: function(ecran) {
        try {
            const result = eval(ecran.innerText);
            if (result === Infinity || result === -Infinity) {
                ecran.innerText = 'Erreur';
            } else {
                ecran.innerText = String(result);
            }
        } catch (error) {
            ecran.innerText = 'Erreur';
        }
    }
};

module.exports = calculator;
