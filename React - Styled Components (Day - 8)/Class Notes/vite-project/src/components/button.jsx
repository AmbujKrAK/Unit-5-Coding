// import '../components/button.css'
import styled from "styled-components";

// export const Button = ({ children, onClick }) => {
//   return (
//     <button onClick={onClick} className="btn">
//       {children}
//     </button>
//   )
// }

const Button = styled.button`
    background-color: ${(props)=> props.theme == "light" ? "royalblue" : "crimson"};
    width: 150px;
    padding: 20px;
    font-size: 24px;
    color: ${(props)=> props.theme == "light" ? "crimson" : "royalblue"};
    cursor: pointer;
    border-radius: 4px;
    margin: 5px;

    &:hover{
        box-shadow: #a0e80f 0 3px 8px;
    }
`;

export default Button;


