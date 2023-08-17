import {FC} from 'react'
import styled from "@emotion/styled"
import {AiFillGithub} from "react-icons/ai"
import Log from "../assets/image/evergreen-logo.svg"


const Container = styled.header`
height: 70px;
width: 100%;
background-color:white;
display: flex;
align-items:center;
justify-content:space-between;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        `;


const Wrapper = styled.div`
display:flex;
align-items: center;

`;

const Logo = styled.img`
height: 20px;
margin-left: 20px;
`;

const Navigation = styled.div`
display:flex;
align-items:center;
margin-left: 30px;

`;

const Nav = styled.nav`
margin-right:25px;
font-size:15px;
color: rgba(0,0,0,0.7);
transition: all 350ms;
cursor: pointer;


:hover{
    color: black;
}`;


const GitHub = styled.div`
margin-right:30px;
display: flex;
align-items: center;
gap: 20px;
`

const Hold = styled.div`
display:flex;
align-items: center;
padding:10px;
background-color: #b2aeae;
font-size:13px;
`;

const Icon = styled.div`
font-size:15px;`

const Text = styled.div``

const Altext = styled.div`
 height: 40px;
    width: 70px;
    background-color: #b2aeae;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;


    ::after{
    content: "";
    height: 20px;
    width: 30px;
    background-color: #b2aeae;
    position: absolute;
    top: 10px;
    right: 56px;
    clip-path:polygon(57% 0, 55% 100%, 0 45%) ;
    }
`


export const Header:FC = () => {
  return (
    
        <Container>
            <Wrapper>
                <Logo src ={Log} />
                <Navigation>
                    <Nav>Introduction</Nav>
                    <Nav>Foundation</Nav>
                    <Nav>Componenet</Nav>
                    <Nav>Patterns</Nav>
                    <Nav>Resources</Nav>
                </Navigation>
            </Wrapper>
            <GitHub>
                <Hold>
                    <Icon>
                    <AiFillGithub />
                    </Icon>
                    <Text>Text</Text>
                </Hold>
                <Altext>
                    12200
                </Altext>
            </GitHub>
            
        </Container>

  )
}
