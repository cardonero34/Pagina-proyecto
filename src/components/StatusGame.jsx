import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState({})
  const [vidas, setVidas] = useState({})

  return (
    <>
      <div className="gemas">
        <button>gema 1</button>
        <button>gema 2</button>
        <button>gema 3</button>
      </div>

      <div className="vidas">
        <button>Vida 1</button>
        <button>Vida 2</button>
        <button>Vida 3</button>
      </div>
    </>
  )
}
