import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
        <Logo >
            <img src="/images/logo.svg" alt="" />
        </Logo>
        <NavMenu> 
            <a href="/home">
                <img src="images/home-icon.svg" alt="home" />  
                <span>Home</span>
            </a>
            <a >
                <img src="images/search-icon.svg" alt="search" />  
                <span>Search</span>
            </a>
            <a >
                <img src="images/watchlist-icon.svg" alt="Watchlist" />  
                <span>Watchlist</span>
            </a>
            <a >
                <img src="images/original-icon.svg" alt="original" />  
                <span>Originals</span>
            </a>
            <a >
                <img src="images/movie-icon.svg" alt="movie" />  
                <span>Movie</span>
            </a>
            <a >
                <img src="images/series-icon.svg" alt="series" />  
                <span>Series</span>
            </a>
          
        </NavMenu>
        <Login>Login</Login>
    </Nav>
  )
}


const Nav = styled.nav`
position: fixed;
top:0;
left:0;
right: 0;
height: 70px;
background-color: #090b13;
display:flex;
justify-content: space-between;
align-items:center;
padding: 0 36px ;
letter-spacing: 16px;
z-index : 3;

`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    marhin-height: 70px;

    img{
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`

display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;


a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    transition: all 0.2s ease 0s;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
        

    }
    span{
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.10px;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
     
    
    }

 


}

@media  (max-width: 768px) {
    display: none;
}


`


const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
    }

`


export default Header