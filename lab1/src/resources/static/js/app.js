// const moonPath = "M14.5 29.5C14.5 44.6878 27 55.947 28 55.9648C12.8122 55.9648 0.5 43.6527 0.5 28.4648C0.5 13.277 12.8122 0.964844 28 0.964844C28 0.964844 14.5 14.3122 14.5 29.5Z";
// const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
// const darkMode = document.querySelector('#darkMode');
// let toggle = false;
// darkMode.addEventListener('click', () => {
//     const timeline = anime.timeline({
//         duration: 750,
//         easing: "easeOutExpo"
//     });
//     timeline.add({
//         targets: ".sun",
//         d: [
//             {value: toggle ? sunPath : moonPath}
//         ]
//     })
//         .add({
//             targets: "#darkMode",
//             rotate: toggle ? 0 : 360
//         }, '-= 350')
//         .add({
//             targets: "body",
//             backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)'
//         }, '-= 700')
//         .add({
//             targets: ".nav-link, .navbar-text", color: toggle ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
//         }, '-=700');
//     toggle = !toggle
// });
const shopNavButton = document.querySelector('.nav-button:nth-of-type(1)');
const blogNavButton = document.querySelector('.nav-button:nth-of-type(2)');
const contactNavButton = document.querySelector('.nav-button:nth-of-type(3)');
const navOpen = document.querySelector('.nav-open');
const navOpen2 = document.querySelector('.nav-open-2');
const shopTimeline = new TimelineLite({
    paused: true, reversed: true
});
const blogTimeLine = new TimelineLite({
    paused: true, reversed: true
});
blogTimeLine.to('.cover', 1, {
    width: '60%', ease: Power2.easeOut
})
    .to('nav', 1, {
        height: '100%', ease: Power2.easeOut
    }, '-=0.5')
    .fromTo('#blog.nav-open-2', 0.5, {
        opacity: 0, x: 50, ease: Power2.easeOut
    }, {
        opacity: 1, x: 0, onComplete: function () {
            navOpen2.style.pointerEvents = 'auto'
        }
    });
shopTimeline.to('.cover', 1, {
    width: '60%', ease: Power2.easeOut
})
    .to('nav', 1, {
        height: '100%', ease: Power2.easeOut
    }, '-=0.5')
    .fromTo('#shop.nav-open', 0.5, {
        opacity: 0, x: 50, ease: Power2.easeOut
    }, {
        opacity: 1, x: 0, onComplete: function () {
            navOpen.style.pointerEvents = 'auto'
        }
    });

shopNavButton.addEventListener('click', (e) => {
    if (shopTimeline.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(shopTimeline)
});


blogNavButton.addEventListener('click', (e) => {
    if (blogTimeLine.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(blogTimeLine)
});


function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse()
}