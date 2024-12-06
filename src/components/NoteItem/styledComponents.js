// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 14px;
  margin: 6px;
  width: 31%;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 6px;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  margin-top: 0px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const Note = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #1e293b;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`
