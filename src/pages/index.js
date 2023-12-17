import { useEffect } from 'react'
import { useStorageCast } from '../hooks'
import { Target } from '../components'

export default function Index() {

  const { send } = useStorageCast()

  useEffect(() => {
    if (!window) return
    setInterval(function () {
      const newX = window.screenX;
      const newY = window.screenY;
      send({ newX, newY })
    }, 100);

  }, [])


  return (
    <>
      <Target size={120} />
    </>
  )
}
