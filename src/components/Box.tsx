import * as React from 'react';
import styled from 'styled-components'
import useMousePosition from '../utils/MousePosition';
import useWindowDimensions from '../utils/WindowSize';
import { getImage } from "../utils/Images";

interface BoxProps {
    image: string,
}

const BoxWrapper = styled.div<BoxProps>`
    background-image: url(${props => props.image});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

    return <BoxWrapper image={getImage(relativePositionX, relativePositionY)}>
        {hasMovedCursor
            ? `Your cursor is at ${x}, ${y}. Max size is ${width}, ${height}. Relative position is ${relativePositionX}, ${relativePositionY}`
            : "Move your mouse around."}
    </BoxWrapper>
};

export default Box
