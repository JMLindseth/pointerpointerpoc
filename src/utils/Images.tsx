import ny_tom from '../images/ny_tom.png';
import nullNull from '../images/00.png'
import nullEn from '../images/01.png'
import nullTo from '../images/02.png'
import nullTre from '../images/03.png'
import enNull from '../images/10.png'
import enEn from '../images/11.png'
import enTo from '../images/12.png'
import enTre from '../images/13.png'
import toNull from '../images/20.png'
import toEn from '../images/21.png'
import toTo from '../images/22.png'
import toTre from '../images/23.png'
import treNull from '../images/30.png'
import treEn from '../images/31.png'
import treTo from '../images/32.png'
import treTre from '../images/33.png'

export const getImage = ((relativePositionX: number, relativePositionY: number) => {
    if (relativePositionX === -1 || relativePositionY === -1) {
        return ny_tom;
    }

    const xIndex = ranges.findIndex((range) => {
        return relativePositionX >= range.start && relativePositionX <= range.end;
    });

    const yIndex = ranges.findIndex((range) => {
        return relativePositionY >= range.start && relativePositionY <= range.end;
    });

    const imageRef = imageRefs.find((ref) => {
        return ref.x === xIndex && ref.y === yIndex;
    });

    return !!imageRef
        ? imageRef.image
        : ny_tom;

})

const ranges = [
    {start: 0.0, end: 0.25},
    {start: 0.25, end: 0.5},
    {start: 0.5, end: 0.75},
    {start: 0.75, end: 1},
]

const imageRefs = [
    {x: 0, y: 0, image: nullNull},
    {x: 0, y: 1, image: nullEn},
    {x: 0, y: 2, image: nullTo},
    {x: 0, y: 3, image: nullTre},
    {x: 1, y: 0, image: enNull},
    {x: 1, y: 1, image: enEn},
    {x: 1, y: 2, image: enTo},
    {x: 1, y: 3, image: enTre},
    {x: 2, y: 0, image: toNull},
    {x: 2, y: 1, image: toEn},
    {x: 2, y: 2, image: toTo},
    {x: 2, y: 3, image: toTre},
    {x: 3, y: 0, image: treNull},
    {x: 3, y: 1, image: treEn},
    {x: 3, y: 2, image: treTo},
    {x: 3, y: 3, image: treTre},
]
