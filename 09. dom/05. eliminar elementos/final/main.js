
const html = `
<div class="container">
        <ul id="lista">
            <li id="item-home">
                <a href="#" id="link-home">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
`;

document.querySelector('body').innerHTML = html;

const lista     = document.querySelector('#lista');
const itemHome  = document.querySelector('#item-home');
const linkHome  = document.querySelector('#link-home');

//linkHome.remove();
//itemHome.remove();
lista.removeChild(itemHome);
