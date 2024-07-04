const calculator = require('./calculator');

test('appendCharacter ajoute le bon caractère à l\'écran', () => {
    let ecran = { innerText: '' };
    calculator.appendCharacter(ecran, '1');
    expect(ecran.innerText).toBe('1');
});

test('clearScreen efface l\'écran', () => {
    let ecran = { innerText: '123' };
    calculator.clearScreen(ecran);
    expect(ecran.innerText).toBe('');
});

test('deleteLast supprime le dernier caractère de l\'écran', () => {
    let ecran = { innerText: '123' };
    calculator.deleteLast(ecran);
    expect(ecran.innerText).toBe('12');
});

test('calculateResult retourne le bon résultat pour une addition', () => {
    let ecran = { innerText: '1+2' };
    calculator.calculateResult(ecran);
    expect(ecran.innerText).toBe('3');
});

test('calculateResult retourne le bon résultat pour une soustraction', () => {
    let ecran = { innerText: '5-2' };
    calculator.calculateResult(ecran);
    expect(ecran.innerText).toBe('3');
});

test('calculateResult retourne le bon résultat pour une multiplication', () => {
    let ecran = { innerText: '3*2' };
    calculator.calculateResult(ecran);
    expect(ecran.innerText).toBe('6');
});

test('calculateResult retourne le bon résultat pour une division', () => {
    let ecran = { innerText: '6/2' };
    calculator.calculateResult(ecran);
    expect(ecran.innerText).toBe('3');
});

test('calculateResult retourne "Erreur" pour une expression invalide', () => {
    let ecran = { innerText: '5/0' }; // Division par zéro devrait être une erreur
    calculator.calculateResult(ecran);
    expect(ecran.innerText).toBe('Erreur');
});
