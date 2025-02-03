import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ProductCard = (product) => {
    const textColor = useColorModeValue('gray.600', 'gray.200')
    const bg = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb ={4}>
                ₱{product.price}
            </Text>

            <HStack>
                <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                <IconButton icon={<DeleteIcon />} onClick={() => handleDelete(product._id)} colorScheme='red'/>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard
