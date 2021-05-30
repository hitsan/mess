let $mess = document.getElementById('send_box');
let $button = document.getElementById('send_btn');
const $caht_area = document.getElementById('chat');

const clickHandler = () => {
    let li = document.createElement('li');
    let text = document.createTextNode($mess.value);
    console.log($mess.value);
    console.log(text);

    li.appendChild(text);
    console.log(li);
    console.log($button);
    $caht_area.appendChild(li);
}
$button.addEventListener('click', () => {
    clickHandler();
});
