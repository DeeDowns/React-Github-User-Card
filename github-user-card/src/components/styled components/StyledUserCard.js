import styled from 'styled-components'

const StyledUserCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: inset 0 0 10px #000000;

    img {
        width: 50%; 
        border-radius: 5px; 
    }
`
export default StyledUserCard