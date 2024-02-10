import React from "react";
import Logo from '../../assets/img/LogoProjetoNetflix.png'
import './Menu.css'
import { LogoImage, MenuWrapper } from "./ButtonLink/style";
import Button from "../Button";

import { Link } from 'react-router-dom'


function Menu() {

    return (
        <MenuWrapper className="Menu">
            <Link to="/">
               <LogoImage className="Logo" src={Logo} alt="DaroneFlix" />
            </Link>

            <Button as={Link} className="BotaoLink" to="cadastro/video">
                Novo video
            </Button>
        </MenuWrapper>
    );
    }

export default Menu;