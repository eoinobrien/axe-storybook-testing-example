import React, { FC } from "react";

const styles: any = {
  SliderForm: {
    width: "500px"
  },
};

interface SliderFormProps {
  alt?: string;
}

const SliderForm: FC<SliderFormProps> = () => {

  return (
    <form>
      <label>
        Range
        <input type="range" min="1" max="100" value="50" id="input-id" disabled />
      </label>
      <br/>
      <label>
        Text
        <input type="text" id="input-id" disabled />
      </label>
    </form>
  );
};

export default SliderForm;
