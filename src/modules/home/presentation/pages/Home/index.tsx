import React from "react";
import styles from "./styles.module.scss";
import {ContentSwitcher, Switch} from "carbon-components-react";
import ArticleBox from "../../components/ArticleBox";
import ArticleClip from "../../components/ArticleClip";

function Home(): JSX.Element {
    return (
        <main>
            <section className={styles.sort}>
                <p>Sort by</p>
                <div>
                    <ContentSwitcher onChange={() => {}}>
                        <Switch name="name">Name</Switch>
                        <Switch name="popularity">Popularity</Switch>
                    </ContentSwitcher>
                </div>
            </section>
            <section className={styles.articles}>
                <div className={styles.boxes}>
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />

                </div>
                <div className={styles.most_liked}>
                    <h2>Most liked</h2>
                    <ArticleClip />
                    <ArticleClip />
                    <ArticleClip />
                    <ArticleClip />
                    <ArticleClip />
                    <ArticleClip />
                    <ArticleClip />

                </div>
            </section>

        </main>
    );
}

export default Home;
