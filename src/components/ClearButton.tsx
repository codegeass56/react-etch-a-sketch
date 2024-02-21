import React from "react";
import Button from "./Button";

type Props = {
  onClear: React.Dispatch<React.SetStateAction<boolean>>;
};

function ClearButton({ onClear }: Props) {
  return (
    <Button
      className="clearBtn"
      onClick={() => {
        onClear(true);
      }}
    >
      Clear
    </Button>
  );
}

export default ClearButton;
