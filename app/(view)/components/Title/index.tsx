import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {}

export function Title({children}: Props) {
  return <h2 className={styles.title}>{children}</h2>;
}
