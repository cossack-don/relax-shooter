const container = document.querySelector('#container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


const breathAnimation = () => {

    text.innerHTML = 'Глубокий вдох';
    container.className = 'container grow';

    setTimeout(() => {

        text.innerHTML = 'Пауза';

        setTimeout(() => {

            text.innerHTML = "Глубокий выдох";
            container.className = 'container shrink';

        }, holdTime);

    }, breatheTime);
}

breathAnimation()

setInterval(breathAnimation, totalTime);