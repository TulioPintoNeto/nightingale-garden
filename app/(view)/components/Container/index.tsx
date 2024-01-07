import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

type Props = PropsWithChildren & {
  background?: "green" | "image";
  padding?: boolean;
}

export function Container({
  background: background,
  children,
  padding = false,
}: Props) {
  return (
    <div
      className={CN(styles.containerFluid, {
        [styles.bgGreen]: background === "green",
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
