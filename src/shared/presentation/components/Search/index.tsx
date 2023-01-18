import React, {Dispatch, Ref, SetStateAction, useEffect, useRef} from "react";
import styles from "./styles.module.scss";

interface SearchProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

}

function Search({open, setOpen}: SearchProps): JSX.Element {

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(open) {
            if(container.current && container.current.style) {
                container.current.style.top = '0';
            }
        } else {
            if(container.current && container.current.style) {
                container.current.style.top = '100vh';
            }
        }
    }, [open]);



    return (
        <div className={styles.container} ref={container}>
            hello universe
        </div>
    );
}

export default Search;
