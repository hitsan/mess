let element = document.getElementById('msg_box');
let button = document.getElementById('send_btn');

button.addEventListener('click', () => {
    document.write(element.value);
});
