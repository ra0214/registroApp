import styled from "styled-components";

const ImageStyled = styled.image`
    width: 70px;
    height: 70px;
    border: 2px white solid;
    border-radius: 40px;
    background-image: url('café.jpg');
    background-size: 100%;
`;

function Image(){
    return(
        <ImageStyled></ImageStyled>
    )
}

export default Image;