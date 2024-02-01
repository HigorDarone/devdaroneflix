import styled from "styled-components";

const Button = styled.a`


color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
  opacity: .5;
}

@media(max-width: 800px){
position: fixed;
left: 0;
right: 0;
bottom: 0;
outline: 0;
background-color: orange;
color: black;
text-align: center;
border: 0;
border-radius: 0;
}
`;


export default Button