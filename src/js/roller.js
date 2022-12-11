import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
let ballAmount = 20;
let minSpeed = 5000
let maxSpeed = 7500

function pop(ball){
    anime.timeline().add({
        targets: ball.currentTarget,
        opacity: 0,
        translateY: '500',
        easing: 'easeInOutBack',
        duration: 1000,
    }).add({
        targets: ball.currentTarget,
        opacity: 0,
        translateY: '0',
        easing: 'linear',
        duration: 300,
    }).add({
        targets: ball.currentTarget,
        easing: 'linear',
        opacity: 0,
        duration: 5000,
    }).add({
        targets: ball.currentTarget,
        easing: 'linear',
        opacity: 1,
        duration: 300,
    })
}

function initRoller(){
    console.log('resize')

    let track = document.getElementById('track')
    let rollerBase = document.getElementById('rollerBase')
    let withTrack = window.innerWidth
    
    track.innerHTML = ''
    for(let i = 0; i < ballAmount; i++){
        let size = Math.random() * 100000 % (i + 1) + 3
        let speed = Math.floor((Math.random() % (i + 1)) * (maxSpeed - minSpeed + 1) + maxSpeed)


        let copyBall = rollerBase.cloneNode()
        copyBall.id = 'ball_' + i
        copyBall.style.width = size + 'vh'
        copyBall.style.height = size + 'vh'
        copyBall.style.opacity = Math.random() % 1 + 0.25
        copyBall.style.filter = 'blur(' + Math.random() % 1 + 0.25 + 'em)';
        track.append(copyBall)

        copyBall.addEventListener('click', pop)

        let widthBall = copyBall.offsetWidth;
        anime({
            targets: copyBall,
            easing: 'linear',
            loop: true,
            delay: i * (maxSpeed / 25) * size,
            translateX: [
                { value: -1.5 * widthBall, duration: 0 },
                { value: withTrack + widthBall, duration: speed }
            ],
            rotate:[
                { value: -1.5 * widthBall, duration: 0 },
                { value: withTrack + widthBall, duration: speed }
            ]
        })
    }
}

const Roller = () => {
    useEffect(() => {
        window.addEventListener('resize', initRoller)
        initRoller()
    });

    return (
        <>
            <div id='rollerBase' className="roller rotating">
            </div>
            <div id='track' className='track'>

            </div>
        </>
    );
};

export default Roller