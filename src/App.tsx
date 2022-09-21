import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
    </AppContainer>
  );
};
