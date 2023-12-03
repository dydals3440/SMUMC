import styled from "styled-components";
import theme from "../../theme";

const ImgContainer = styled.img`
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 300px;
    height: 200px;
`;

// const ImgLayout = styled.img`

// `;

const TitleContainer = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    height: 70px;
    padding: 10px;
    background-color: ${theme.COLOR.DARK.GRAY};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Title = styled.div`
    font-size: 13px;
    color: white;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export { ImgContainer, TitleContainer, Title };