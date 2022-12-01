import React from "react";
import styles from "./styles.module.scss";
import {ContentSwitcher, Switch} from "carbon-components-react";
import ArticleBox from "../../components/ArticleBox";

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


                </div>
                <div className={styles.most_liked}>
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />
                    <ArticleBox />

                </div>
            </section>

        </main>
    );
}

export default Home;
