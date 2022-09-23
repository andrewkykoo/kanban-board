import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./CustomDragLayer";

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <>
      <h1>Kanban Board </h1>
      <p>w/ draggable cards and lists</p>
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column key={list.id} text={list.text} id={list.id} />
        ))}
        <AddNewItem
          onAdd={(text) => dispatch(addList(text))}
          toggleButtonText="+ Add another list"
        />
      </AppContainer>
    </>
  );
};
