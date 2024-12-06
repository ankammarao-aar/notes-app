// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: bold;
  color: #4c63b6;
  padding: 22px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 2px 2px 12px #aab8c8;
  padding: 30px;

  @media (max-width: 767px) {
    width: 90%;
    padding: 16px;
  }
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  border: none;
  outline: none;
  margin-bottom: 20px;
`

export const Textarea = styled.textarea`
  font-family: 'Roboto';
  color: #1e293b;
  border: none;
  outline: none;
`

export const Button = styled.button`
  font-family: 'Roboto';
  background-color: #4c63b6;
  color: #ffffff;
  width: 60px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  align-self: end;
  margin-right: 22px;
  cursor: pointer;
  outline: none;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    width: 90%;
  }
`

export const ItemContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 22px;
  padding: 22px;
`

export const Image = styled.img`
  height: 110px;
  margin-top: 22px;

  @media (max-width: 767px) {
    height: 76px;
  }
`

export const Text = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  margin-top: 22px;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #334155;
  margin-top: 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`
