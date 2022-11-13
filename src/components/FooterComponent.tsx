import React from 'react'
import { Flex, Text, Link } from "@chakra-ui/react"
export default function FooterComponent() {
    return (
        <Flex
            w='full'
            bg="blackAlpha.50"
            minHeight='20vh'
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            justifyContent='center'>
            <Text mb='3'>
                Built with love {' '}
                <Link href='https://github.com/sammy-code98' isExternal color='blue.500'>CodeSammy98</Link>
            </Text>
            <Text opacity='0.5' px='4'>Open source landing page sample built with chakra ui</Text>
        </Flex>
    )
}
