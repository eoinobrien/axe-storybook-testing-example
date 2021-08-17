import React, { FC } from "react";

const styles: any = {
  collapsible: {
    width: "500px"
  },
  heading: {
    padding: "0.1rem 1rem",
    background: "rebeccapurple",
    color: "white"
  },
  content: {
    padding: "1rem",
    background: "white",
    color: "lightblue",
    border: "rebeccapurple solid 2px"
  }
};

interface CollapsibleProps {
  title?: string;
  text?: string;
  isCollapsed?: boolean;
}

const Collapsible: FC<CollapsibleProps> = ({
  title = "My title",
  text = "This is hidden while collapsed",
  isCollapsed = false,
}) => {
  const [isShowBody, setIsShowBody] = React.useState(isCollapsed);

  const onClickHandler = () => {
    setIsShowBody((isShowBody) => !isShowBody);
  };

  return (
    <div style={styles.collapsible}>
      <div
        onClick={onClickHandler}
        style={styles.heading}
      >
        <h1>{title}</h1>
      </div>
      {isShowBody && (
        <div style={styles.content}>{text}</div>
      )}
    </div>
  );
};

export default Collapsible;
