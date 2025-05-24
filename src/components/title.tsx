import type { ReactNode } from "react";

import "./title.css";

interface ITitleProps {
  titleWeight: number;
  children: ReactNode;
}

export const Title = ({ titleWeight, children }: ITitleProps) => {
  return titleWeight == 1 ? (
    <h1 className="header_title">{children}</h1>
  ) : (
    <h2 className="result_title">{children}</h2>
  );
};
