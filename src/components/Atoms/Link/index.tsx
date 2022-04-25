import React from "react";

import styles from './index.module.scss'

interface IProps {
  link: string;
  openEpisode: (link: string) => () => void;
}

export const Link: React.FC<IProps>= ({link, openEpisode }) => {
  return (
    <div className={styles.link} onClick={openEpisode(link)}>{link}</div>
  )
}