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
  <Layout title="virtualcv">
    <Container>
      <Title>
        VirtualCV Infographic<Badge>아주대학교 개인프로젝트</Badge>
      </Title>
      <P>
        가상의 이력서 인포그래픽입니다. 다양한 시각화 및 인포그래픽을 활용하여
        디자인하였고, 자세한 내용은 아래 Notion에서 확인할 수 있습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Notion</Meta>
          <Link
            href="https://www.notion.so/Virtual-CV-Infographic-0166c65c6a9b4a9b9635e8b5706c5b98"
            isExternal
          >
            https://www.notion.so/Virtual-CV-Infographic-0166c65c6a9b4a9b9635e8b5706c5b98{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/virtualCV.jpg" alt="virtualCV" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
