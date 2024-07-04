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
        <Heading ml={4}><Link to='/'><img src="https://images.squarespace-cdn.com/content/v1/639b2f23dc9f2876506c3f35/45193704-1407-46cf-9a8e-3b6480115215/PLAY%21+Logos_WTOUTLINE.png?format=1500w" alt="Logo" style={{ height: '90px', width: 'auto', padding:'10px'}} /></Link></Heading>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            style={{ backgroundColor: '#DAA520', color: '#fff' }} 
            _hover={{ backgroundColor: '#B8860B' }}
          >
            Categorias
          </MenuButton>
          <MenuList style={{ backgroundColor: '#FFD700' }}> {}
            <MenuItem className="menu-item">
              <Link to="/categorias/Remeras" className="menu-link" style={{ color: '#000' }}>
                Remeras
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <Link to="/categorias/Gorras" className="menu-link" style={{ color: '#000' }}>
                Gorras
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <Link to="/categorias/Mochilas" className="menu-link" style={{ color: '#000' }}>
                Mochilas
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
