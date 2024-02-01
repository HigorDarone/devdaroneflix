import React from "react";
import Logo from '../../assets/img/LogoProjetoNetflix.png'
import './Menu.css'
import { LogoImage, MenuWrapper } from "./ButtonLink/style";
import Button from "../Button";


function Menu() {

    return (
        <MenuWrapper className="Menu">
            <a href="/">
               <LogoImage className="Logo" src={Logo} alt="DaroneFlix" />
            </a>

            <Button as="a" className="BotaoLink" href="/">
                Novo video
            </Button>
        </MenuWrapper>
    );
    }

export default Menu;