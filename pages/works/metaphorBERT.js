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
  <Layout title="metaphorBERT">
    <Container>
      <Title>
        Metaphor BERT<Badge>중견연구사업 2년차연구 BERT Model 제작</Badge>
      </Title>
      <P>
        감성시각화(Sentiment Visualization)를 사용한 논문들에서 나타나는 1년차
        연구에서 제작한 분류체계에 해당하는 텍스트들을 라벨링하여 이를
        분석대상(TAR), 매개(INT), 재현물(REP), 시각적 변수(VAR), 시각화
        테크닉(TEC) 항목으로 분류해 모델의 정확도를 확인하고 이에 대한 t-SNE 및
        Decision Tree, TranSHAP 을 수행하였습니다. 해당 모델의 결과를 REPORT로
        작성하였습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/metaphor-BERT" isExternal>
            https://github.com/hm00081/metaphor-BERT{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Report</Meta>
          <Link
            href="https://drive.google.com/file/d/1y9vYHP4sISTdQ_Jiu4yDKBzngjrCaP69/view?usp=drive_link"
            isExternal
          >
            https://drive.google.com/file/d/1y9vYHP4sISTdQ_Jiu4yDKBzngjrCaP69/view?usp=drive_link{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/BERT3.png" alt="BERT3" />
      <WorkImage src="/images/works/BERT4.png" alt="BERT4" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
