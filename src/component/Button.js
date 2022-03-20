import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 16px;
    color: #ffffff;
    background-color: #3498DB;
    border-radius: 5px;
    border: 0px;
    height: 38px;
    padding: 0px 20px;
    margin: 0px 2px;
    cursor: pointer;
    outline: none;
    font-weight: 700;
    &:hover {
      background-color: #AED6F1;
    }
}`;

const Button = (props) => (
    <StyledButton disabled={props.disable} onClick={props.onClick}>{props.text}</StyledButton>
);

export default Button;