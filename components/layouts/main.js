import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kwanghyuk's homepage" />
        <meta name="author" content="Kwanghyuk Moon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Kwanghyuk Moon" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" /> */}
        {/* <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Kwanghyuk Moon" />
        <meta name="og:title" content="Kwanghyuk Moon" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Kwanghyuk Moon - Homepage</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
