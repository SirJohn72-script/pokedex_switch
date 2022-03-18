import React, {
  useState,
  useRef,
  useEffect,
  Suspense,
} from "react"
import { Html, useGLTF } from "@react-three/drei"
import Hero from "../Hero/Hero"

const SwitchModel = ({
  rotationSwitch,
  currentPokemon,
  showPokemonCard,
  setShowPokemonCard,
  listPokemons,
  pokeSelector,
  setPokeSelector,
  setCurrentPokemon,
  setCurrentPokemonIndex,
  currentPokemonIndex,
  getListOfPokemons,
  offset,
  setOffset,
  showLoader,
}) => {
  const heroScroll = useRef(null)

  const group = useRef()
  const [scrollTop, setScrollTop] = useState(0)
  const { nodes, materials } = useGLTF(
    "./models/Switch.gltf"
  )

  // Buttons for hover
  const [hoverDwn, setHoverDwn] = useState(false)
  const [hoverIzq, setHoverIzq] = useState(false)
  const [hoverDer, setHoverDer] = useState(false)
  const [hoverSup, setHoverSup] = useState(false)
  const [hoverMenos, setHoverMenos] = useState(false)
  const [hoverMas, setHoverMas] = useState(false)
  const [hoverB, setHoverB] = useState(false)
  const [hoverA, setHoverA] = useState(false)

  const changeScrollTop = (top) => {
    const val = 125 * top
    if (heroScroll.current) {
      heroScroll.current.scrollTop = val
      setScrollTop(heroScroll.current.scrollTop)
      return
    }
  }

  // Scroll top
  useEffect(() => {
    if (heroScroll) {
      if (pokeSelector >= 1 && pokeSelector <= 3) {
        changeScrollTop(0)
        return
      }

      if (pokeSelector >= 4 && pokeSelector <= 6) {
        changeScrollTop(1)
        return
      }

      if (pokeSelector >= 7 && pokeSelector <= 9) {
        changeScrollTop(2)
        return
      }

      if (pokeSelector >= 10 && pokeSelector <= 12) {
        changeScrollTop(3)
        return
      }

      if (pokeSelector >= 13 && pokeSelector <= 15) {
        changeScrollTop(4)
        return
      }

      if (pokeSelector >= 16 && pokeSelector <= 18) {
        changeScrollTop(5)
        return
      }

      if (pokeSelector >= 19 && pokeSelector <= 21) {
        changeScrollTop(6)
        return
      } else {
        setScrollTop(0)
      }
    }
  }, [pokeSelector])

  return (
    <group
      ref={group}
      dispose={null}
      rotation={rotationSwitch}
    >
      <group name="Scene">
        <group name="pantalla">
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
          />
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Pantalla}
          />
        </group>
        <mesh
          name="joystick_izq"
          castShadow
          receiveShadow
          geometry={nodes.joystick_izq.geometry}
          material={nodes.joystick_izq.material}
        />
        <mesh
          name="btn_flex_dwn"
          castShadow
          receiveShadow
          geometry={nodes.btn_flex_dwn.geometry}
          // material={nodes.btn_flex_dwn.material}
          onPointerOver={() => setHoverDwn(true)}
          onPointerLeave={() => setHoverDwn(false)}
          onPointerDown={() => setHoverDwn(true)}
          onPointerMissed={() => setHoverDwn(false)}
          onClick={() => {
            setPokeSelector(pokeSelector + 3)
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverDwn ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_fle_izq"
          castShadow
          receiveShadow
          geometry={nodes.btn_fle_izq.geometry}
          // material={nodes.btn_fle_izq.material}
          onPointerOver={() => setHoverIzq(true)}
          onPointerLeave={() => setHoverIzq(false)}
          onPointerDown={() => setHoverIzq(true)}
          onPointerMissed={() => setHoverIzq(false)}
          onClick={() => {
            if (pokeSelector > 1) {
              setPokeSelector(pokeSelector - 1)
            }
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverIzq ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_fle_sup"
          castShadow
          receiveShadow
          geometry={nodes.btn_fle_sup.geometry}
          // material={nodes.btn_fle_sup.material}
          onPointerOver={() => setHoverSup(true)}
          onPointerLeave={() => setHoverSup(false)}
          onPointerDown={() => setHoverSup(true)}
          onPointerMissed={() => setHoverSup(false)}
          onClick={() => {
            if (pokeSelector > 3) {
              setPokeSelector(pokeSelector - 3)
            }
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverSup ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_fle_der"
          castShadow
          receiveShadow
          geometry={nodes.btn_fle_der.geometry}
          // material={nodes.btn_fle_der.material}
          onPointerOver={() => setHoverDer(true)}
          onPointerLeave={() => setHoverDer(false)}
          onPointerDown={() => setHoverDer(true)}
          onPointerMissed={() => setHoverDer(false)}
          onClick={() => {
            if (pokeSelector < 21) {
              setPokeSelector(pokeSelector + 1)
            }
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverDer ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_captura"
          castShadow
          receiveShadow
          geometry={nodes.btn_captura.geometry}
          material={nodes.btn_captura.material}
        />
        <mesh
          name="btn_menos"
          castShadow
          receiveShadow
          geometry={nodes.btn_menos.geometry}
          // material={nodes.btn_menos.material}
          onPointerOver={() => setHoverMenos(true)}
          onPointerLeave={() => setHoverMenos(false)}
          onPointerDown={() => setHoverMenos(true)}
          onPointerMissed={() => setHoverMenos(false)}
          onClick={() => {
            setPokeSelector(1)

            if (offset >= 21) {
              getListOfPokemons(offset - 21)
              setOffset(offset - 21)
            }
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverMenos ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="joystick_der"
          castShadow
          receiveShadow
          geometry={nodes.joystick_der.geometry}
          material={nodes.joystick_der.material}
        />
        <mesh
          name="btn_b"
          castShadow
          receiveShadow
          geometry={nodes.btn_b.geometry}
          // material={nodes.btn_b.material}
          onPointerOver={() => setHoverB(true)}
          onPointerLeave={() => setHoverB(false)}
          onPointerDown={() => setHoverB(true)}
          onPointerMissed={() => setHoverB(false)}
          onClick={() => {
            setShowPokemonCard(true)
            setCurrentPokemon(
              listPokemons[pokeSelector - 1]
            )
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverB ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_y"
          castShadow
          receiveShadow
          geometry={nodes.btn_y.geometry}
          material={nodes.btn_y.material}
        />
        <mesh
          name="btn_x"
          castShadow
          receiveShadow
          geometry={nodes.btn_x.geometry}
          material={nodes.btn_x.material}
        />
        <mesh
          name="btn_a"
          castShadow
          receiveShadow
          geometry={nodes.btn_a.geometry}
          // material={nodes.btn_a.material}
          onPointerOver={() => setHoverA(true)}
          onPointerLeave={() => setHoverA(false)}
          onPointerDown={() => setHoverA(true)}
          onPointerMissed={() => setHoverA(false)}
          onClick={() => {
            setShowPokemonCard(false)
            setCurrentPokemon(
              listPokemons[pokeSelector - 1]
            )
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverA ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="btn_home"
          castShadow
          receiveShadow
          geometry={nodes.btn_home.geometry}
          material={nodes.btn_home.material}
        />
        <mesh
          name="btn_mas"
          castShadow
          receiveShadow
          geometry={nodes.btn_mas.geometry}
          // material={nodes.btn_mas.material}
          onPointerOver={() => setHoverMas(true)}
          onPointerLeave={() => setHoverMas(false)}
          onPointerDown={() => setHoverMas(true)}
          onPointerMissed={() => setHoverMas(false)}
          onClick={() => {
            setPokeSelector(1)
            if (offset < 260) {
              getListOfPokemons(offset + 21)
              setOffset(offset + 21)
            }
          }}
        >
          <meshStandardMaterial
            roughness={0.95}
            color={hoverMas ? "#ffff00" : "#2B2F32"}
          />
        </mesh>
        <mesh
          name="trigger_sup"
          castShadow
          receiveShadow
          geometry={nodes.trigger_sup.geometry}
          material={nodes.trigger_sup.material}
        />
        <mesh
          name="trigger_down"
          castShadow
          receiveShadow
          geometry={nodes.trigger_down.geometry}
          material={nodes.trigger_down.material}
        />
        <mesh
          name="mando_1"
          castShadow
          receiveShadow
          geometry={nodes.mando_1.geometry}
          material={materials.Mando_1}
        />
        <mesh
          name="btn_pan"
          castShadow
          receiveShadow
          geometry={nodes.btn_pan.geometry}
          material={materials.botones_grises}
        />
        <mesh
          name="mando_2"
          castShadow
          receiveShadow
          geometry={nodes.mando_2.geometry}
          material={materials.Mando_2}
        />
        <mesh
          name="visualizador"
          castShadow
          receiveShadow
          geometry={nodes.visualizador.geometry}
          //   material={nodes.visualizador.material}
        >
          <Html
            transform
            rotation-x={Math.PI * -0.5}
            position-y={0.7}
            occlude
          >
            <Suspense fallback={null}>
              <Hero
                heroScroll={heroScroll}
                showPokemonCard={showPokemonCard}
                currentPokemon={currentPokemon}
                listPokemons={listPokemons}
                pokeSelector={pokeSelector}
                scrollTop={scrollTop}
                currentPokemonIndex={currentPokemonIndex}
                showLoader={showLoader}
              />
            </Suspense>
          </Html>
        </mesh>
      </group>
    </group>
  )
}
useGLTF.preload("./models/Switch.gltf")

export default SwitchModel
