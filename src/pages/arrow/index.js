
import { useCallback, useEffect, useRef, useState } from 'react'
import { useStorageCast } from '../../hooks'
import styled from 'styled-components'

import { Arrow } from '../../components'

export default function Index() {

    const { storageCastData } = useStorageCast()
    const arrowRef = useRef()
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        if (!storageCastData) return
        const boundingClientValues = arrowRef.current.getBoundingClientRect()
        const x = boundingClientValues.left + arrowRef.current.clientWidth / 2
        const y = boundingClientValues.top + arrowRef.current.clientHeight / 2

        const radian = Math.atan2(storageCastData.newX - x, storageCastData.newY - y)
        const rotation = (radian * (180 / Math.PI) * -1) + 270
        setRotation(rotation + 20)
    }, [storageCastData])

    return (
        <div ref={arrowRef}>
            <Container rotation={rotation}>
                <Arrow size={50} />
            </Container>
        </div>
    )
}


const Container = styled.div`
transform: ${(props) => {
        return "rotate(" + props.rotation + "deg)"
    }};
transition: ease .3s all;
`