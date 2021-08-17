import React, { FC } from "react";

const styles: any = {
  tag: {
    display: "inline",
    padding: "0.5rem 1rem",
    backgroundColor: "red",
    color: "darkred"
  },
};

interface TagProps {
  title?: string;
}

const Tag: FC<TagProps> = ({ title = "My title" }) => {
  return (
    <div style={styles.tag}>{title}</div>
  );
};

export default Tag;
