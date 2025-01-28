import { Box, Container, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  return (
    <Container maxW={"container.sm"} px={4} >
      <VStack 
      spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
        w={"full"} 
        bg={useColorModeValue("white", "gray.800")} 
        p={6} rounded={"lg"} 
        boxShadow={"lg"}
        >
          <VStack
          spacing={4}
          >
            <Input
              placeholder="Product Name"
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            >

            </Input>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
