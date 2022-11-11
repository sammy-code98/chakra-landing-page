import React from 'react'
import { Box, Button, Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react'

export default function HeroComponent() {
    const [isMobileScreen] = useMediaQuery('(min-width: 62em)')

    return (
        <Flex
            alignItems='center'
            w='full'
            px={isMobileScreen ? '24' : '6'}
            py='16'
            minHeight='90vh'
            justifyContent='space-between'
            flexDirection={isMobileScreen ? 'row' : 'column'}
        >
            <Box
                mr={isMobileScreen ? '6' : '0'}
                w={isMobileScreen ? '60%' : 'full'}
            >
                <Text
                    fontSize={isMobileScreen ? '5xl' : '4xl'}
                    fontWeight='bold'
                    mb='4'
                >
                    Lorem ipsum dolor sit amet
                </Text>
                <Text
                    mb='6'
                    fontSize={isMobileScreen ? 'lg' : 'base'}
                    opacity={0.7}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptates animi odit praesentium fuga impedit eveniet libero necessitatibus,
                    consectetur ab est sapiente dignissimos inventore fugiat quia nam! Vitae, quae pariatur.
                </Text>

                <Button
                    px='2rem'
                    py='1.5rem'
                    colorScheme='blue'
                    variant='solid'
                    mb={isMobileScreen ? '0' : '10'}
                    size={isMobileScreen ? 'lg' : 'md'}
                >Get Started</Button>

            </Box>
            <Spacer />

            <Flex
                w={isMobileScreen ? '40%' : 'full'}
                alignItems='center'
                justifyContent='center'

            >
                <Image
                    src='https://res.cloudinary.com/ddfbgvxgw/image/upload/v1666091374/cld-sample.jpg'
                    alt='img'
                    borderRadius='8px'
                />

            </Flex>
        </Flex>
    )
}
