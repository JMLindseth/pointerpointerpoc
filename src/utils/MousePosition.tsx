import {
    useState,
    useEffect,
} from "react";

interface IPosition {
    x: number | undefined | null
    y: number | undefined | null
}

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<IPosition>({ x: null, y: null });

    const updateMousePosition = ((ev: MouseEvent) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    });

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;
