let user = 'admin';
let orderOwner = 'leo_tolstoy';

if (user === 'admin' || orderOwner === user) {
    console.log('Разрешено редактировать');
} else {
    console.log('Заказ нельзя редактировать');
}