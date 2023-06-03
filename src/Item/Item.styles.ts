import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
  
    button{
        border-radius: 1rem;
        background-color: #BF4F74;
        color: white;
        padding: 1rem;
    }
    button:hover{
        background-color: #BF4F74;
    }

    img{
        max-height:250px;
        object-fit: contain;
        padding: 1rem;
    }

    div{
        font-family: Arial,Helvetica, sans-serif;
        padding: 1rem;
        height:100%;
    }

    .rate{
        display: flex;
        justify-content: space-between;      
    }

    .star{
        color: #ffc908;
    }

`;
