document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('nav');

    header.innerHTML = `
        <svg
                class="menu"
                width="43"
                height="23"
                viewBox="0 0 43 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="43" y2="1.5" stroke="black" stroke-width="3"></line>
            <line y1="11.5" x2="43" y2="11.5" stroke="black" stroke-width="3"></line>
            <line y1="21.5" x2="43" y2="21.5" stroke="black" stroke-width="3"></line>
        </svg>
        <div class="nav-open">
            <div class="contact">
                <h3 id="load-time"></h3>
            </div>
            <div class="social">
                <h3>Social</h3>
                <div class="social-links">
                    <a href="https://vk.com/id101956384">
                        <img src="./src/resources/static/files/vk.svg" style="width: 30px; height: 30px" alt="VK">
                    </a>
                    <a href="https://github.com/DoKep2">
                        <img src="./src/resources/static/files/github.svg" style="width: 30px; height: 30px" alt="GitHub">
                    </a>
                    <a href="https://t.me/DoKep1">
                        <img src="./src/resources/static/files/telegram.svg" style="width: 32px; height: 32px;"
                             alt="Telegram">
                    </a>
                </div>
            </div>
            <div class="back">
                <a href="./index.html">
                <h3  style="text-decoration: none; color: black">Back</h3>
                </a>
            </div>
        </div>
    `
    document.querySelector('header').appendChild(header);

    function init() {
        const burger = document.querySelector('.menu');
        const burgerLines = document.querySelectorAll('.menu line');
        const navOpen = document.querySelector('.nav-open');
        const contact = document.querySelector('.contact');
        const social = document.querySelector('.social');
        const back = document.querySelector('.back');
        const tl = new TimelineMax({paused: true, reversed: true});

        tl.to(navOpen, 0.5, {y: 0})
            .fromTo(contact, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0})
            .fromTo(social, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0})
            .fromTo(back, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0});

        burger.addEventListener('click', () => {
            tl.reversed() ? tl.play() : tl.reverse();
        })
    }

    init();
});