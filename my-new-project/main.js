// Отримуємо елементи DOM
const form = document.getElementById('myForm');
const showInfoButton = document.getElementById('showInfo');
const infoDiv = document.getElementById('info');

// Обробник події для форми
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Зберігаємо дані (можна зберегти у локальному сховищі, базі даних, або просто вивести на екран)
    console.log(`Ім'я: ${name}, Email: ${email}`);
    
    // Очищаємо форму
    form.reset();
});

// Обробник події для кнопки
showInfoButton.addEventListener('click', function () {
    // Відображаємо додаткову інформацію
    infoDiv.classList.toggle('hidden'); // Перемикаємо клас 'hidden'
    infoDiv.classList.add('fade-in'); // Додаємо анімацію
});