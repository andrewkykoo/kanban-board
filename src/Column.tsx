import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="generate app scaffold" />
      <Card text="learn typescript" />
      <Card text="begin to use static typing" />
    </ColumnContainer>
  );
};
