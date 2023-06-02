import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Categorycard = ({image, category}) => {
  return (
    <>

<div className='category-card'>
  
  <Link>
        <Box
          position="relative"
          width='100%'
          height="30vw"
          borderRadius="2.67vw"
          overflow="hidden"
          mx='0'
        >
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            height="100%"
            borderRadius="2.67vw"
            position="relative">
            <Box
              className="overlay"
              position="absolute"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.7)"
              borderRadius="2.67vw"
            ></Box>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="#FFFFFF"
              textAlign="center"
              fontSize="2.27vw"
              fontFamily="Overpass"
              fontWeight="600"
            >
              {category}
            </Box>
          </Box>
        </Box>
  </Link>
</div>
  


    
    </>
  )
}

export default Categorycard
