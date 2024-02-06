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
  <Layout title="marriedNet">
    <Container>
      <Title>
        Joseon Kingdom Married Network <Badge>아주대학교 인문과학연구소</Badge>
      </Title>
      <P>
        조선왕조와 왕비의 부, 조부의 인물 네트워크를 구성하여 본관, 봉호, 묘호,
        관직 등의 변수 데이터 분석을 기반으로 Betweeness, PageRank, Closeness,
        Degree의 관계성 외에도 실제 왕조실록에서 누락된 데이터를 GCN 학습을 통해
        예측하여 이를 시각화로 보여주는 작업을 진행하였습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hm00081.github.io/MarriedNetwork/" isExternal>
            https://hm00081.github.io/MarriedNetwork/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/MarriedNetwork" isExternal>
            https://github.com/hm00081/MarriedNetwork{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/marriedNetwork.jpg" alt="marriedNetwork" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
