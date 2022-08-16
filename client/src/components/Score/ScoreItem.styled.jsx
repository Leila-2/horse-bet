import styled from 'styled-components';

export const ScoreEl = styled.li`
  border: 1px solid #416876;
  border-radius: 5px;
  padding: 10px;
  flex-basis: calc((100% - 20px) / 2);
  :not(last-child) {
    margin-bottom: 10px;
  }

  transition-property: background-color, margin;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    background-color: #416876;
    margin 5px;
  }
`;
