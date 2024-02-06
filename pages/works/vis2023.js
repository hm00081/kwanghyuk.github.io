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
  <Layout title="vis2023">
    <Container>
      <Title>
        Towards Better Understanding: Proposing Effective Visualization Methods
        for Analyzing Argument in Debate <Badge>IEEE VIS 2023 Poster</Badge>
        <div style={{ fontSize: '15px', fontWeight: 'lighter' }}>
          <br />
          <b>Kwanghyuk Moon</b>, Hyoji Ha, Kyungwon Lee.
        </div>
      </Title>
      <P>
        <div
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
        >
          ABSTRACT
        </div>{' '}
        Debate is a crucial process where participants exchange diverse
        perspectives and information, culminating in a reasoned conclusion. The
        task of understanding and analyzing the arguments that emerge during
        this process can be complex and challenging. To mitigate these
        challenges, we propose a visualization interface that intuitively
        illustrates the relationship between contentious sections and key debate
        points within a debate. The co-occurrence matrix identifies
        controversial sections, while the speech section graph highlights the
        primary contentious keywords in their respective contexts. Furthermore,
        the bar chart displays the frequency of arguments from both pros and
        cons positions within a contentious section. The circle packing provides
        a hierarchical representation of issues within a topic, showcasing and
        comparing the topical keywords between significant pros and cons groups.
        Through this system, we anticipate that users will be able to visualize
        the structure and flow of the argument at a *e-mail: moonspl@ajou.ac.kr
        †e-mail: hjha0508@sogang.ac.kr ‡e-mail: kwlee@ajou.ac.kr glance, thereby
        facilitating a more comprehensive understanding of the entire debate.
        <br />
        Index Terms: Visual Analytics System, Natural Language Preprocessing
        (NLP), Debate Analysis, Human Computer Interaction
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Poster</Meta>
          <Link
            href="https://drive.google.com/file/d/16DQDryrS-OXPy0V9mWSv64ggRvg30Tp5/view?usp=drive_link"
            isExternal
          >
            https://drive.google.com/file/d/16DQDryrS-OXPy0V9mWSv64ggRvg30Tp5/view?usp=drive_link{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/tvdebate-front" isExternal>
            https://github.com/hm00081/tvdebate-front{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Report</Meta>
          <Link
            href="https://drive.google.com/file/d/1tRtoMfkv7J9cZz1K4gtL7IOJy-4STOLA/view?usp=drive_link"
            isExternal
          >
            https://drive.google.com/file/d/1tRtoMfkv7J9cZz1K4gtL7IOJy-4STOLA/view?usp=drive_link{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/vis2023_1094.jpg" alt="vis2023_1094" />
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
