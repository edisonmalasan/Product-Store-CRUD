import React from 'react'
import { Container, Link, Text, VStack } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <Container maxWidth="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400,blue.500)"}
          bgClip={"text"}
          >
            <Link to={"/"}>Current Products 🚀</Link>
          </Text>

          <Text fontSize='xl' textAlign={"center"} fontWeight={'bold'} color={'gray.500'} > 
              No products found 😢{""}
              <Link to={"/create"}>
                <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: 'underline' }}>
                  Create a new product
                </Text>
              </Link>
          </Text>
      </VStack>
    </Container>
  )
}

export default Homepage
