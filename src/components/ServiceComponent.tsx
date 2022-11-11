import React from 'react'
import { Box, Flex, Spacer, useMediaQuery, Button, Text, Image } from '@chakra-ui/react'

export default function ServiceComponent() {
    const [isMobileScreen] = useMediaQuery('(min-width: 62em)')

    return (
        <Flex
            width='full'
            minHeight='70vh'
            alignItems='center'
            px={isMobileScreen ? '24' : '6'}
            py='16'
            justifyContent='center'
            flexDirection={isMobileScreen ? 'row' : 'column'}
        >
            <Flex
                width={isMobileScreen ? '50%' : 'full'}
                mb={isMobileScreen ? '0' : '6'}
                alignItems='center'
                justifyContent='center'
            >
                <Image
                    src='https://res.cloudinary.com/ddfbgvxgw/image/upload/v1666091374/cld-sample.jpg'
                    alt='img'
                    borderRadius='8px'
                    w='full'
                />
            </Flex>
            <Spacer />

            <Flex
                width={isMobileScreen ? '50%' : 'full'}
                flexDirection='column'
                ml={isMobileScreen ? '7' : '0'}
            >
                <Text fontSize={isMobileScreen ? '5xl' : '4xl'} fontWeight="bold">
                    We build, We revive
                </Text>

                <Text mb="6" opacity="0.8">
                    Your business needs to b Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt illum porro consequuntur eaque voluptates fugiat totam esse velit, placeat asperiores id voluptatum, eos at veniam nam. Inventore, eveniet reprehenderit?
                </Text>
                <Box display='flex' justifyContent='center' alignItems='center'>

                    <Button
                        px='1rem'
                        py='.5rem'
                        colorScheme='blue'
                        variant='solid'
                        mb={isMobileScreen ? '0' : '10'}
                        size={isMobileScreen ? 'lg' : 'md'}
                    >Contact Us</Button>
                </Box>
            </Flex>
        </Flex>
    )
}
