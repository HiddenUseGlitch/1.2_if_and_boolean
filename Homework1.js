let name = 'admin';
let balance = 6000;

if (name === 'admin') {
    console.log('Администратор');
} else if (name === '') {
    console.log('Гость'); 
} else if (balance > 5000) {
    console.log('Вип-клиент');
} else if (balance > 1000) {
    console.log('Постоянный покупатель');
} else {
    console.log(name);
}