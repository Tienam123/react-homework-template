import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 8px;
`;
const setBackground = (props) => {
  switch (props) {
    case 'beginner':
      return 'green';
      case 'advanced':
      return 'red';
    case 'intermediate':
      return 'yellow';

  }
}

export const ListItem = styled.li`
border: 1px solid #fff;
  padding: 20px;
  background-color: ${props => setBackground(props.type)};


  &:hover {
    background-color: peru;
  }


`;
