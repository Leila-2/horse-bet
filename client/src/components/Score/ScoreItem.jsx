import { ScoreEl } from './ScoreItem.styled';
import { List } from './List.styled';
export default function ScoreItem({ horses }) {
  return (
    <List>
      {horses?.map(({ distance, name, id }) => {
        return (
          <ScoreEl key={id}>
            <p>{name}</p>
            <p>{distance}</p>
          </ScoreEl>
        );
      })}
    </List>
  );
}
