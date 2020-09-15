import * as React from 'react';
import styled from 'styled-components'
import veden from '../images/veden.jpg';
import useMousePosition from "../utils/MousePosition";
import useWindowDimensions from "../utils/WindowSize";

const BoxWrapper = styled.div`
    background-image: url(${veden});
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Box = () => {
    const { x, y } = useMousePosition();
    const { height, width } = useWindowDimensions();

    const relativePositionX = x
        ? (x / width)
        : -1;
    const relativePositionY = y
        ? (y / height)
        : -1;

    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    return <BoxWrapper>
        {hasMovedCursor
            ? `Your cursor is at ${x}, ${y}. Max size is ${width}, ${height}. Relative position is ${relativePositionX}, ${relativePositionY}`
            : "Move your mouse around."}
    </BoxWrapper>
};

export default Box
