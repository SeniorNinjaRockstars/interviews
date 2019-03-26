import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 3rem 3rem;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
  `}
  
  ${({ theme }) => theme.media.mobile`
    grid-template-columns: repeat(1, 1fr);
  `};
`;

export default Grid;