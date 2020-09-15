import tom from '../images/tom.png';
import upper_left from '../images/upper_left.png';
import lower_left from '../images/lower_left.png';
import upper_right from '../images/upper_right.png';
import lower_right from '../images/lower_right.png';

export const getImage = ((x: number, y: number) => {
    if (x === -1 || y === -1) {
        return tom;
    }
    if (x < 0.5) {
        console.log('X MINDRE');
        return y < 0.5
            ? upper_left
            : lower_left
    }
    console.log('X STØRRE');
    return y < 0.5
        ? upper_right
        : lower_right
})
