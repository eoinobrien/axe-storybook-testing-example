import React, { FC } from "react";

const styles: any = {
  tag: (bgColor: string) => ({
    display: "inline",
    padding: "0.5rem 1rem",
    backgroundColor: bgColor,
    color: "darkred"
  }),
};

interface TagProps {
  title?: string;
  backgroundColor?: string;
}

const Tag: FC<TagProps> = ({ title = "My title", backgroundColor="red" }) => {
  return (
    <div style={styles.tag(backgroundColor)}>{title}</div>
  );
};

export default Tag;
