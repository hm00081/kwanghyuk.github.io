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
  <Layout title="aodr">
    <Container>
      <Title>
        Constructing a Taxonomy for Sentiment Visualization Analysis Using
        Visual Metaphors <Badge>AODR 2022</Badge>
        <div style={{ fontSize: '15px', fontWeight: 'lighter' }}>
          <br />
          Hyoji Ha, Hyerim Joung, <b>Kwanghyuk Moon</b>, Kyungwon Lee.
        </div>
      </Title>

      <P>
        <div
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
        >
          ABSTRACT
        </div>{' '}
        <b>Background</b> Due to the recent development of data mining and
        Natural Language Processing(NLP) technologies, sentiment analysis
        targets are more diverse tendencies than just information with
        affirmative or negative side. Accordingly, there are increasing cases of
        analyzing sentiment information using high-dimensional visualization
        technology, and these cases are often difficult to understand from a
        public point of view. In order to solve these problems, there is an
        increasing movement to visualize sentiment information using visual
        metaphors. Therefore, for the purpose of easier to understand related
        cases, there is a need for a measure to systematically organize
        information on their research methods, purposes, and visual metaphors.
        <br />
        <b>Methods</b> In this study, a taxonomy is proposed that can examine in
        detail the research process of sentiment analysis visualization cases
        based on visual metaphors. First, sentiment visualization cases based on
        visual metaphors are collected and used as data for constructing a
        taxonomy. Second, selecting the criteria that constitute the taxonomy,
        and based on the step-by-step analysis work that appears in the metaphor
        process, the attributes of the criteria are largely divided into five
        elements (Target, Task-oriented Intermediation, Representation, Visual
        Variables and Visualization Technique) and detailed sub-elements are
        selected. Third, classification work is performed using an actual study
        based on the created taxonomy. Finally, in order to find the utility and
        improvements of the taxonomy, an qualitative evaluation is conducted for
        subjects. <br />
        <b>Results</b> The designed taxonomy in this study provided it easy to
        understand what kind of sentiment information the visual metaphor from
        sentiment visualization is based on, what motives or backgrounds the
        metaphor has progressed, what representation have replaced sentiment
        information, and how visual variables are performed to add interpretive
        meaning to the representation. During the verification process, it was
        estimated that the taxonomy of this study helps to understand
        inclusively sentiment visualizations using visual metaphors. On the
        other hand, we also confirmed the need for adding more Subcategory level
        1 elements to the representation and visualization techniques.
        Furthermore, specifying as well as subdividing the definitions of both
        criteria's element is just as necessary. <br />
        <b>Conclusions</b> We expect that the taxonomy proposed in this study
        can be a guideline to inform researchers of the visual techniques and
        ideas that is required to become a comprehendible sentiment analysis
        visualization result to users. In future work, this study will improve
        the taxonomy to easily explain the visual metaphor process that appears
        in different cases. In addition, we will conduct a quantitative
        evaluation of several related researchers to verify the effectiveness of
        the classification system and the understanding of the visual metaphor
        process. Finally, more diverse visual metaphor cases will be classified
        and converted into a database, and we will create a system that can help
        users to freely explore related cases. Keywords Visual Metaphor, Data
        Visualization, Sentiment Analysis, Sentiment Visualization, Taxonomy
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Report</Meta>
          <Link href="http://www.aodr.org/xml/33136/33136.pdf" isExternal>
            http://www.aodr.org/xml/33136/33136.pdf{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/aodr_2022.jpeg" alt="aodr_2022" />
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
