import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const { onAdd, toggleButtonText, dark } = props;

  const [showForm, setShowForm] = useState<boolean>(false);

  if (showForm) {
    // show item creation form
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
