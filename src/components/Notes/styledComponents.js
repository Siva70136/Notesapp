// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100vh;
  font-family: 'Bree Serif';
`
export const Header = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px;
  width: 450px;
  height: 200px;
  padding: 10px;
`

export const Input = styled.input`
  border-width: 0px;
  margin: 15px;
`
export const Input1 = styled.textarea`
  border-width: 0px;
  margin: 15px;
`
export const Button = styled.button`
  cursor: pointer;
  background-color: #4c63b6;
  align-self: flex-end;
  border-width: 0px;
  width: 70px;
  padding: 8px;
  border-radius: 8px;
`

export const ItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  list-style: none;
`
export const Text = styled.p`
  color: black;
`
