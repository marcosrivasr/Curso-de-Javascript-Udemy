
const items = document.querySelectorAll('.acordeon .item .header button');

items.forEach(item => {
    item.addEventListener('click', e => {
        const content = e.target.parentElement.nextElementSibling;
        content.classList.toggle('show');
    });
});