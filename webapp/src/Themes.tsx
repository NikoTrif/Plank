import { useSelector } from "react-redux"
import { IDarkMode } from "./slices";
import { ReactElement, useEffect } from "react";
import Cyborg from "./styles/themes/Cyborg";
import Flatly from "./styles/themes/Flatly";

// CSS

type Props = {
    children: ReactElement
}

const Themes = (props: Props) => {

    const state = useSelector(state => state);
    const { darkMode } = state as IDarkMode;

    useEffect(() => {
        
    },[darkMode]);

    const themeChooser = () => {
        switch (darkMode) {
            case true:
                
                return <Cyborg>{props.children}</Cyborg>
            case false:
                return <Flatly>{props.children}</Flatly>
            default:
                return <Flatly>{props.children}</Flatly>
        }
    }

    return (
        <>{themeChooser()}</>
    )
}

export default Themes;