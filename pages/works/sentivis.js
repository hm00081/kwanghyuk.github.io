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
  <Layout title="sentiviz">
    <Container>
      <Title>
        SentimentViz<Badge>중견연구사업 2년차연구 1차 프로토타입</Badge>
      </Title>
      <P>
        감성시각화(Sentiment Visualization)를 사용한 논문들에서 나타나는 1년차
        연구에서 제작한 분류체계에 해당하는 텍스트들을 라벨링하여 이에 해당하는
        항목들을 필터링하여 검색하는 시스템입니다. 논문 연도별 필터링, 항목(Hide
        / Indifferent / Want) 및 검색 필터링, 논문그림을 클릭하여 해당 상세
        정보를 확인할 수 있습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/sentiment_Viz" isExternal>
            https://github.com/hm00081/sentiment_Viz{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sentiivz_1.jpeg" alt="marriedNetwork" />
      <WorkImage src="/images/works/sentiviz_2.jpeg" alt="marriedNetwork" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
