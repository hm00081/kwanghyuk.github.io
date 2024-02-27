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
  <Layout title="sagepub">
    <Container>
      <Title>
        An Exploration System to Effectively Analyze the Visual Metaphor Used in
        Sentiment Visualization<Badge>Information Visualization</Badge>
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
        In the field of data visualization, there has been a recent trend of
        using a complex type of visualization with a multidimensional structure
        or using several visualizations in parallel when summarizing the results
        of sentiment analysis. Although this trend may be useful for
        sophisticated sentiment analysis, such analysis is difficult for the
        general public and novice researchers. To address this issue, there has
        recently been a trend of visualizing sentiments using visual metaphors.
        To facilitate the understanding of related cases, it is necessary to
        have a systematic means of grasping the sentiment target, the purpose
        and motivation of research, and the representations used as substitutes
        for visual metaphors. Therefore, the objective of the present study was
        to develop an exploration system that can analyze the visual metaphors
        used in the case of sentiment visualization. For this study, (1)
        sentiment visualization cases in which visual metaphors are used were
        collected. (2) After a taxonomy composed of the categories of “target,
        intermediation, representation, visual variable, and visualization
        technique” was constructed, it was used to analyze sentences of visual
        metaphors appearing in sentiment visualization cases. (3) An exploration
        system capable of grasping the semantic relationships of sub-elements
        within the five categories of the taxonomy and intuitively interpreting
        visual metaphors was developed so that appropriate cases can be
        recommended to sentiment visualization researchers. (4) The approach and
        usefulness of the exploration system were explained using user
        scenarios. (5) A case study was conducted to show that the provided
        system can be analyzed from various perspectives. (6) The usability of
        the exploration system was demonstrated through a verification targeting
        experts. The proposed system allows researchers and analysts to
        intuitively grasp “what types of visual metaphor method and idea should
        be equipped to visualize sentiment data in an easier way to understand.”
        <br />
        Index Terms: Sentiment analysis, sentiment visualization, visual
        metaphor, taxonomy, exploration system
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Report</Meta>
          <Link
            href="https://journals.sagepub.com/doi/abs/10.1177/14738716241228593"
            isExternal
          >
            https://journals.sagepub.com/doi/abs/10.1177/14738716241228593{' '}
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
          <Meta>Video</Meta>
          <Link href="https://youtu.be/XLNXB8RLWTI" isExternal>
            https://youtu.be/XLNXB8RLWTI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sagepub.png" alt="sagepub" />
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
