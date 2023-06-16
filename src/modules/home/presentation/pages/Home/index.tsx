import React, {useCallback, useEffect} from "react";
import styles from "./styles.module.scss";
import {ContentSwitcher, SkeletonPlaceholder, Switch} from "carbon-components-react";
import ArticleBox from "../../components/ArticleBox";
import ArticleClip from "../../components/ArticleClip";
import {useGetArticles} from "../../hooks/useGetArticles";

function Home(): JSX.Element {
    const {isLoading, load, articleBoxes, articleClips} = useGetArticles();

    useEffect(()=> {
       load('DATE')
           .then();

    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.sort}>
                <p>Sort by</p>
                <div>
                    <ContentSwitcher onChange={(e) =>
                        load(e.name ? (typeof e.name == 'string' ? e.name : e.name.toString()) : 'NAME')}>
                        <Switch name="DATE">Date added</Switch>
                        <Switch name="NAME">Name</Switch>
                    </ContentSwitcher>
                </div>
            </section>
            <section className={styles.articles}>
                <div className={styles.boxes}>
                    {isLoading ?
                        Array(8).fill('').map((x, i) => <SkeletonPlaceholder className={styles.skeleton} key={i}/>)
                        :articleBoxes.slice(0, 12).map((x, i) => <ArticleBox key={i}>{x}</ArticleBox>)
                        }
                    {articleBoxes.length > 0 &&
                        <aside className={styles.banner}>
                            <h1>Thank you for being with us. Take a look to an Airboy repo.</h1>
                            <a href={"https://github.com/AirBoyConsole"}>Click here and we'll take you to the repo!</a>
                        </aside>}
                    {isLoading ?
                        Array(8).fill('').map((x, i) => <SkeletonPlaceholder className={styles.skeleton} key={i}/>)
                        :articleBoxes.slice(12, 24).map((x, i) => <ArticleBox key={i}>{x}</ArticleBox>)
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
