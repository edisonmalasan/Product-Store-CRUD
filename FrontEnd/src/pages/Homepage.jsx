import React, { useEffect } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

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

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            width={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))} 
          </SimpleGrid>

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
