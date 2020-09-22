import tom from '../images/tom.png';

export const getImage = ((relativePositionX: number, relativePositionY: number) => {
    if (relativePositionX === -1 || relativePositionY === -1) {
        return tom;
    }

    const xIndex = Math.trunc(relativePositionX * 10);
    const yIndex = Math.trunc(relativePositionY * 10);

    return require(`../images/${xIndex}${yIndex}.png`);
});
