let name = '';
let balance = 5001;

if (name === 'admin') {
    console.log('Администратор');
} else if (name === '') {
    console.log('Гость'); 
} else if (balance > 5000) {
    console.log('Вип-клиент');
} else if (balance > 1000) {
    console.log('Постоянный покупатель');
} 