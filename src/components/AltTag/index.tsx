import React, { FC } from "react";

const styles: any = {
  AltTag: {
    width: "500px"
  },
};

interface AltTagProps {
  alt?: string;
}

const AltTag: FC<AltTagProps> = ({alt= undefined}) => {

  return (
    <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt={alt} />
  );
};

export default AltTag;
