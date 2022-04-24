import Controls from "./components/Controls/Controls"
import Scene from "./components/Scene/Scene"
import { useState } from "react"
import { generateStore } from "./components/Redux/store"
import { Provider } from "react-redux"

function App() {
  const [showControls, setShowControls] = useState(true)
  const store = generateStore()
  return (
    <>
      <Provider store={store}>
        {showControls && (
          <Controls
            showControls={showControls}
            setShowControls={setShowControls}
          />
        )}
        <Scene />
      </Provider>
    </>
  )
}

export default App
