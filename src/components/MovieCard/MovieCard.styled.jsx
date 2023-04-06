import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

export const InfoBox = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Paragraph = styled.p`
  display: flex;
  gap: 16px;
  margin: 0;
`;

export const Button = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #add8e6bd;

  &:hover {
    background-color: #4d96aedf;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;
