import styled from 'styled-components';

export const StyledCell = styled.div`
  margin: 5px;
  height: 50px;
  width: 50px;
  position: absolute;
  border: 1px solid #cdab21;
  border-radius: 5px;
  background-color: #dec048;
  transform: translate(${({x}) => x * 62}px, ${({y}) => y * 62}px);
  transition: 200ms ease-in-out;
  transition-property: transform;
  text-align: center;
  line-height: 44px;
`;

