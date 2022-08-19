import { Box, Flex, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/report.png';

const Links = ['Dashboard', 'Projects', 'Team'];

interface NavItemProps {
  children: ReactNode;
  to: string;
}
const NavItem = ({ children, to, ...rest }: NavItemProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
        {...rest}
      >
        {children}
      </Flex>
    </NavLink>
  );
};

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NavItem to="/">
                <Image src={logo} boxSize="45px" />{' '}
                <Text ml={5} fontFamily="cursive" fontSize={20} fontWeight={800} color="blue">
                  Dynamic Reports
                </Text>
              </NavItem>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavItem to="/report">Reports</NavItem>
              <NavItem to="/admin">Admin</NavItem>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
