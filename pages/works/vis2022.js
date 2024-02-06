import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="vis2022">
    <Container>
      <Title>
        Exploration Tool for Effectively Interpreting the Visual Metaphor
        Process of Sentiment Visualization{' '}
        <Badge>IEEE VIS LDAV 2022 Poster</Badge>
        <div style={{ fontSize: '15px', fontWeight: 'lighter' }}>
          <br />
          Hyoji Ha, <b>Kwanghyuk Moon</b>, Hyerim Joung, Hyegyeong Kim, Kyungwon
          Lee.
        </div>
      </Title>
      <P>
        <div
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
        >
          ABSTRACT
        </div>{' '}
        This study proposes an exploration tool for users’ intuitive
        understanding of visual metaphor processes in sentiment visualization
        cases. To create the exploration tool, we conducted the following
        procedure 1) Extract sentences about visual metaphor and use ‘Target,
        Intermediation, Representation, Visual Variables, Visualization
        Technique’ as a taxonomy to analyze metaphor processes in the collected
        cases. 2) Create Network to suggest the relationship between
        representation and intermediation. 3) Utilize Sankey Diagram to perceive
        the frequent metaphor process patterns in stages.
        <br />
        Index Terms: Human-centered computing—Visualization— Visualization
        systems and tools—Visualization Toolkits
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Poster</Meta>
          <Link
            href="https://drive.google.com/file/d/14ctf_C47sN7jwsC5XDareWb5i-PNSMTq/view?usp=drive_link"
            isExternal
          >
            https://drive.google.com/file/d/14ctf_C47sN7jwsC5XDareWb5i-PNSMTq/view?usp=drive_link{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/metaphorVis" isExternal>
            https://github.com/hm00081/metaphorVis <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Report</Meta>
          <Link
            href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9966401"
            isExternal
          >
            https://drive.google.com/file/d/1tRtoMfkv7J9cZz1K4gtL7IOJy-4STOLA/view?usp=drive_link{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://youtu.be/XLNXB8RLWTI" isExternal>
            https://youtu.be/XLNXB8RLWTI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/metaphorvis_2022.jpeg"
        alt="metaphorvis_2022"
      />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://youtu.be/vq4MKZUcXxg?si=FagfCn3r1KiIhA5i"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
