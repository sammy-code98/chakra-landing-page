import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    Flex
} from "@chakra-ui/react"
export default function DrawerComponent({ isOpen, onClose, btnRef }: { isOpen: boolean, onClose: any, btnRef: any }) {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        // zIndex='popover'

        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Logo</DrawerHeader>

                <DrawerBody>
                    <Flex flexDirection='column'>
                        <Link mb='5'>About</Link>
                        <Link mb='5'>More Apps</Link>
                        <Link mb='5'>Sign Up </Link>



                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
