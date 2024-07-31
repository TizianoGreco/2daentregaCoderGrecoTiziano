import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
        <Heading ml={4}><Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Louis_Vuitton_LV_logo.png" alt="Logo" style={{ height: '70px', width: 'auto', padding:'10px'}} /></Link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Categorias
        </MenuButton>
        <MenuList>
        <MenuItem className="menu-item">
            <Link to="/categorias/Camisetas" className="menu-link">Prenda Superior Liviana</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Calzado" className="menu-link">Calzado</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Joggins" className="menu-link">Pantalones Largos</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Shorts" className="menu-link">Pantalones Cortos</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Gorras" className="menu-link">Accesorios</Link>
          </MenuItem>
          <MenuItem className="menu-item">
            <Link to="/categorias/Camperas" className="menu-link">Abrigo Superior</Link>
          </MenuItem>
        </MenuList> 
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
