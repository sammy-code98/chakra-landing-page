import React, { useState } from 'react'
import { Flex, Text, Spacer, Button } from "@chakra-ui/react"
export default function Nav() {

    const [scroll, setScroll] = useState(false)

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

        >
            <Text fontSize='xl' fontWeight='bold'>Logo</Text>
            <Spacer />

            <Flex alignItems='center'>
                <Text fontSize='md' mr='10'>About</Text>
                <Text fontSize='md' mr='10'>More Apps</Text>
                <Button>Sign Up </Button>

            </Flex>
        </Flex >
    )
}
