import React from 'react'
import { Flex, Spacer, Text, useMediaQuery, Icon, Heading } from "@chakra-ui/react"
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';


export default function AboutComponent() {

    const [isMobileScreen] = useMediaQuery('(min-width: 62em)')

    return (
        <>
            <Heading>About</Heading>
            <Flex
                minHeight='70vh'
                alignItems='center'
                justifyContent='space-between'
                w='full'
                py='12'
                px={isMobileScreen ? '16' : '6'}
                flexWrap='wrap'
                flexDirection={isMobileScreen ? 'row' : 'column'}
            >
                {aboutArry.map((about) => (
                    <>
                        <Flex
                            key={about.id}
                            height='300px'
                            bg='blackAlpha.200'
                            width={isMobileScreen ? '32%' : 'full'}
                            shadow='md'
                            p='6'
                            alignItems='center'
                            justifyContent='center'
                            borderRadius='md'
                            flexDirection='column'
                            textAlign='center'
                            mb={isMobileScreen ? '0' : '4'}
                        >

                            <Icon as={about.icon} boxSize={14} color='blue.600' mb='5' />
                            <Text textAlign='center' fontSize='md' opacity={0.7} fontWeight={400}>{about.text}</Text>
                        </Flex>
                    </>
                ))}

            </Flex>

        </>

    )
}



const aboutArry = [
    { id: 1, text: 'OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior', icon: FaTools },
    { id: 2, text: 'The Common Workflow Language (CWL) is an open and tools in a way that makes them portable and scalable across a variety of software and hardware environments, from workstations to cluster, cloud, and high performance computing (HPC) environments', icon: FaHandshake },
    { id: 3, text: 'Debian is a volunteer-driven project building "the Universal Operating System", a 100% free and open source distribution, based on the Linux, FreeBSD and Hurd kernels, for all devices, ranging from mobile phones, personal computers, to mainframes and distributed cluster.', icon: FaStar }
]