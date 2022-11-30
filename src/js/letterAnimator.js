import anime from 'animejs/lib/anime.es.js';

function animateLetters(element_ids) {
    let timeline = anime.timeline({ loop: true });
    element_ids.forEach(element_id => {
        let element = document.getElementById(element_id)
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        timeline.add({
            targets: '#' + element_id + ' .letter',
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2500,
            delay: (el, i) => 300 + 40 * i
        }).add({
            targets: '#' + element_id + ' .letter',
            translateY: [0, -100],
            opacity: [1, 0],
            easing: "easeInExpo",
            color: '#c10000',
            duration: 2500,
            delay: (el, i) => 300 + 40 * i
        })
    });
}

export default animateLetters;