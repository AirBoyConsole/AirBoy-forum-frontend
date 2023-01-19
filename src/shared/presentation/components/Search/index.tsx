import React, {Dispatch, SetStateAction, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import {useSearchArticles} from "../../hooks/useSearchArticles";
import {SkeletonPlaceholder} from "carbon-components-react";

interface SearchProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

}

function Search({open, setOpen}: SearchProps): JSX.Element {

    const container = useRef<HTMLDivElement>(null);

    const {load, isLoading, articles} = useSearchArticles();

    useEffect(() => {
        if(open) {
            if(container.current && container.current.style) {
                container.current.style.top = '0';

                const input: HTMLElement | null = container.current.querySelector('input[type=search]');

                if(input) {
                    input.focus();
                }
            }
        } else {
            if(container.current && container.current.style) {
                container.current.style.top = '100vh';
            }
        }
    }, [open]);


    return (
        <div className={styles.container} ref={container}>

            <header>
                <div className={styles.close} onClick={() => setOpen(false)}>x</div>
                <input type="search" placeholder="Search" onChange={(e)=>load(e.target.value)}/>
            </header>
            <div className={styles.search_results}>
                {isLoading ?
                    Array(3).fill('').map((x, i) => <SkeletonPlaceholder className={styles.skeleton} key={i}/>)
                    :articles.map((x, i) => <div key={i}>{x.title}</div>)
                }
            </div>
        </div>
    );
}

export default Search;
