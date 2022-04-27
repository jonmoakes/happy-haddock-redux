import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./assets/bg.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        background-color:#1D82CC;
    }
    body {
        margin: 0px auto 100px auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:bold;
        width:100%;
        text-align:center;
        text-transform:capitalize;
        text-shadow:1px 1px 1px black;
        position: relative;
        &:before {
            content: "";
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: -10;
            background: linear-gradient(
                rgba(32, 153, 240, 0.8),
                rgba(32, 153, 240, 0.8)
              ),
              url(${BackgroundImage}) no-repeat center center;
              -webkit-background-size: center;
              -moz-background-size: center;
              -o-background-size: center;
              background-size: cover;
        }
        
        h1, h2 {
            color:yellow;
            text-shadow: 2px 2px 2px black;
        }

        p {
            font-size:20px;
            color:whitesmoke;
        }

        ul {
            padding-left: unset;
            display: table;
            margin: -15px auto 0px auto;
            font-size:18px;

            @media screen and (max-width:1366px) {
                list-style-type: none;
            }
        }
          
        li {
            margin-bottom: 10px;
            text-shadow: 1px 1px 1px black;
            color:yellow;
        }

        hr {
            border:2px solid black;
            width:50%;
            margin:25px auto;

              @media screen and (max-width: 1366px) {
                width: 70%;
            }
        }

        a {
            color:#ffe61b;

            &:hover {
                color: #00ff04;

                @media screen and (max-width:1366px) {
                    color: #ffe61b
                }
             }
        }

        
    }
`;
