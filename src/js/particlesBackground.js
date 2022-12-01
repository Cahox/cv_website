import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const PB = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log('particle container', container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            className="particles_bg"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#292d2d",
                    },
                },
                fullScreen: { enable: false },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "connect",
                        },
                        resize: true,
                    },
                    modes: {
                        connect: {
                            distance: 300,
                            radius: 100,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#393958",
                        distance: 150,
                        enable: true,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 750,
                        },
                        value: 45,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'polygon',
                        polygon:{
                            sides: 6
                        }
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default PB