import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

interface Props extends PropsWithChildren {
  backgroundColor?: "green";
  padding?: boolean;
}

export function Container({
  backgroundColor,
  children,
  padding = false,
}: Props) {
  return (
    <div
      className={CN(styles.containerFluid, {
        [styles.bgGreen]: backgroundColor === "green",
      })}
    >
      <div
        className={CN(styles.container, {
          [styles.padding]: padding,
        })}
      >
        {children}
      </div>
    </div>
  );
}
