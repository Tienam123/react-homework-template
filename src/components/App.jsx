import { QuizList } from './QuizList/QuizList';
import quizItems from '../data/data.json'
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
export const App = () => {
  return (
    <>
      <SearchBar/>
      <QuizList items={quizItems}/>
      <GlobalStyle/>
    </>
  );
};
