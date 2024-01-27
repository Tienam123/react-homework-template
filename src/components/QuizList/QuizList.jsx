/* Default imports */

// Code...
import { QuizItem } from '../QuizItem/QuizItem';
import { List, ListItem } from './QuizList.styled';

export const QuizList = ({items}) => {
  console.log(items);
  return (
    <List>
      {
        items.map((item) => <ListItem type={item.level} a={5} key={item.id}><QuizItem  item={item}/></ListItem>)
      }
    </List>
  );
};

