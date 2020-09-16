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

export const getImage = ((x: number, y: number) => {
    if (x === -1 || y === -1) {
        return ny_tom;
    }

    if (x < 0.25) {
        if (y < 0.25) {
            return nullNull;
        } else if (y < 0.5) {
            return nullEn;
        } else if (y < 0.75) {
            return nullTo;
        }
        return nullTre;
    } else if (x < 0.5) {
        if (y < 0.25) {
            return enNull;
        } else if (y < 0.5) {
            return enEn;
        } else if (y < 0.75) {
            return enTo;
        }
        return enTre;
    } else if (x < 0.75) {
        if (y < 0.25) {
            return toNull;
        } else if (y < 0.5) {
            return toEn;
        } else if (y < 0.75) {
            return toTo;
        }
        return toTre;
    }
    if (y < 0.25) {
        return treNull;
    } else if (y < 0.5) {
        return treEn;
    } else if (y < 0.75) {
        return treTo;
    }
    return treTre;

})
