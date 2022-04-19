import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;

  & div:nth-child(odd) {
    color: aquamarine;
    border-radius: 4px;
    border: 2px solid red;
  }

  &:hover{
        box-shadow: #a0e80f 0 3px 8px;
    }
`
export default Flex ;
