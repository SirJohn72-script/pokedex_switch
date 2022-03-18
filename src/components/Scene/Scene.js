import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { useState, Suspense, useEffect } from "react"
import Camera from "../Camera/Camera"
import Enviroment from "../Enviroment/Enviroment"
import Lights from "../Lights/Lights"
import ShadowCatcher from "../ShadowCatcher/ShadowCatcher"
import {
  SceneContainer,
  SceneWrapper,
} from "./Scene.elements"
import * as THREE from "three"
import SwitchModel from "../Swtich/Swtich"
import { getPokemon } from "../Helpers/GetPokemon"
import { getListPokemons } from "../Helpers/getPokemons"

const Scene = () => {
  const [listPokemons, setListPokemons] = useState([])
  const [showPokemonCard, setShowPokemonCard] =
    useState(false)
  const [currentPokemonIndex, setCurrentPokemonIndex] =
    useState(0)
  const [offset, setOffset] = useState(0)
  const [showLoader, setShowLoader] = useState(true)

  const [currentPokemon, setCurrentPokemon] = useState({
    sprite: "",
    nombre: "",
    numero: "",
    base_exp: "",
    peso: "",
    altura: "",
    base_stat: "",
    tipo: "",
    movimientos: [],
  })
  const [pokeSelector, setPokeSelector] = useState(1)

  const getListOfPokemons = (off) => {
    setShowLoader(true)
    getListPokemons(off)
      .then((data) => {
        setListPokemons(data)
        setShowLoader(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Rotation controls
  const [rotationSwitch, setRotationSwitch] = useState([
    Math.PI * 0.3,
    0,
    0,
  ])
  const [cameraPosition, setCameraPosition] = useState([
    7, 5, 10,
  ])
  const [LightsAndControls, setLightsAndControls] =
    useState(true)

  // Get poke info from api
  useEffect(() => {
    setShowLoader(true)
    getListPokemons()
      .then((data) => {
        setListPokemons(data)
        setShowLoader(false)
      })
      .catch(() => {})

    getPokemon()
      .then((data) => {
        setCurrentPokemon(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //Mobile device
  useEffect(() => {
    const changeRotationSwitch = () => {
      //mobile view
      if (window.innerWidth < 992) {
        if (window.innerWidth < window.innerHeight) {
          //Rotation in Y Axios for the switch model
          setRotationSwitch([0, Math.PI * 0.5, 0])
          setCameraPosition([0, 13.5, 0])
          setLightsAndControls(false)
        } else if (window.innerWidth > window.innerHeight) {
          //No rotation
          setRotationSwitch([0, 0, 0])
          setCameraPosition([0, 7.5, 0])
          setLightsAndControls(false)
        }
      } else {
        // Desktop view
        setRotationSwitch([Math.PI * 0.3, 0, 0])
        setCameraPosition([5, 7, 10])
        setLightsAndControls(true)
      }
    }
    changeRotationSwitch()
    window.addEventListener("resize", () =>
      changeRotationSwitch()
    )

    window.addEventListener("DOMContentLoaded", () =>
      changeRotationSwitch()
    )

    window.addEventListener("orientationchange", () =>
      changeRotationSwitch()
    )

    return () => {
      window.removeEventListener(
        "resize",
        changeRotationSwitch
      )
      window.removeEventListener(
        "DOMContentLoader",
        changeRotationSwitch()
      )
    }
  }, [])

  return (
    <>
      <SceneContainer>
        <SceneWrapper>
          <Canvas
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 0.7,
            }}
            shadowMap
            shadows="true"
          >
            <Camera cameraPosition={cameraPosition} />
            <Lights />
            <Enviroment />
            <Suspense fallback={null}>
              <SwitchModel
                rotationSwitch={rotationSwitch}
                currentPokemon={currentPokemon}
                showPokemonCard={showPokemonCard}
                setShowPokemonCard={setShowPokemonCard}
                listPokemons={listPokemons}
                pokeSelector={pokeSelector}
                setCurrentPokemon={setCurrentPokemon}
                setPokeSelector={setPokeSelector}
                setCurrentPokemonIndex={
                  setCurrentPokemonIndex
                }
                currentPokemonIndex={currentPokemonIndex}
                getListOfPokemons={getListOfPokemons}
                offset={offset}
                setOffset={setOffset}
                showLoader={showLoader}
              />
            </Suspense>
            <OrbitControls
              target={
                LightsAndControls
                  ? [0, -0.5, 0]
                  : [0, -2, 0]
              }
              enablePan={false}
              enableRotate={LightsAndControls}
              enableZoom={LightsAndControls}
              maxDistance={
                LightsAndControls ? 10 : cameraPosition[1]
              }
              minDistance={2}
            />
            <ShadowCatcher />
          </Canvas>
        </SceneWrapper>
      </SceneContainer>
    </>
  )
}

export default Scene
