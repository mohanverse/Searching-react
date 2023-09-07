import React from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function Particlebg() {
    async function loadParitlces(main){
        await loadFull(main);
    }
  return (
    <Particles
    id='tsparticles'
    init={loadParitlces}
    options={{
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        background: {
            color: {
                value: "#191516",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 400,
                    duration: 1,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 0.5,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1200,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    }}
    />
  )
}

export default Particlebg