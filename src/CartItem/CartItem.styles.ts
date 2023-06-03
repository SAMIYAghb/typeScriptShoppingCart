import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div{
        flex: 1;
    }
  
    .buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        height : 2rem;
        background-color: #BF4F74;
    }

    img{
        max-width: 4rem;
        object-fit: contain;
        margin-left: 2rem;
    }
`
;