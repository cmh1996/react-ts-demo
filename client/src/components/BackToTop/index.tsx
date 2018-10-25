import React from "react";

import styles from "./style.scss";

@log
class BackToTop extends React.Component {
    public render() {
        return (
            <div className={styles.BackToTop}>
                <span>sad</span>
            </div>
        );
    }
}

function log(target: any): void {
    console.log(target);
}

export default BackToTop;
