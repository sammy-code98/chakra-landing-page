import React, { useState } from 'react'
import {
    Flex,
    Text,
    Spacer,
    Button,
    IconButton,
    useColorMode,
    useColorModeValue,
    useMediaQuery,
    Icon

} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';


export default function Nav({ onOpen, ref }: { onOpen: any, ref: any }) {

    const [scroll, setScroll] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
    const navBg = useColorModeValue('white', 'blackAlpha.200')
    const [isMobileScreen] = useMediaQuery('(min-width: 62em)')

    const scrollChange = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? setScroll(true) : setScroll(false)

    window.addEventListener('scroll', scrollChange)

    return (
        <Flex
            h='10vh'
            alignItems='center'
            p='6'
            position='sticky'
            top='0'
            zIndex='sticky'
            w='full'
            boxShadow={scroll ? 'base' : 'none'}
            bg={navBg}

        >
            <Text fontSize='xl' fontWeight='bold'>Logo</Text>
            <Spacer />

            <Flex alignItems='center'>
                <IconButton mr='10' w={6} h={6} p={5} onClick={toggleColorMode} aria-label={'toggle button'}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>

                {
                    isMobileScreen ? (
                        <>
                            <Text fontSize='md' mr='10'>About</Text>
                            <Text fontSize='md' mr='10'>More Apps</Text>
                            <Button>Sign Up </Button>
                        </>
                    ) : (
                        <IconButton
                            ref={ref} onClick={onOpen}
                            aria-label={'harmbugger'}>
                            <Icon as={FaAlignJustify} />
                        </IconButton>
                    )
                }


            </Flex>
        </Flex >
    )
}
