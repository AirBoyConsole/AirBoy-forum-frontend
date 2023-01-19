import React, {useCallback, useEffect} from "react";
import styles from "./styles.module.scss";
import {ContentSwitcher, SkeletonPlaceholder, Switch} from "carbon-components-react";
import ArticleBox from "../../components/ArticleBox";
import ArticleClip from "../../components/ArticleClip";
import {useGetArticles} from "../../hooks/useGetArticles";

function Home(): JSX.Element {
    const {isLoading, load, articleBoxes, articleClips} = useGetArticles();

    useEffect(()=> {
       load('name')
           .then();
    }, []);

    return (
        <main>
            <section className={styles.sort}>
                <p>Sort by</p>
                <div>
                    <ContentSwitcher onChange={(e) =>
                        load(e.name ? (typeof e.name == 'string' ? e.name : e.name.toString()) : 'name')}>
                        <Switch name="date">Date added</Switch>
                        <Switch name="name">Name</Switch>
                    </ContentSwitcher>
                </div>
            </section>
            <section className={styles.articles}>
                <div className={styles.boxes}>
                    {isLoading ?
                        Array(6).fill('').map((x, i) => <SkeletonPlaceholder className={styles.skeleton} key={i}/>)
                        :articleBoxes.map((x, i) => <ArticleBox key={i}>{x}</ArticleBox>)
                        }

                </div>
                <div className={styles.most_liked}>
                    <h2>Most liked</h2>
                    {isLoading ?
                        Array(7).fill('').map((x, i) => <SkeletonPlaceholder className={styles.skeleton} key={i}/>)
                        :articleClips.map((x, i) => <ArticleClip key={i}>{x}</ArticleClip>)
                    }

                </div>
            </section>
        </main>
    );
}

export default Home;
