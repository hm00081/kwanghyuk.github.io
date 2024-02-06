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
  <Layout title="jewel">
    <Container>
      <Title>
        Wedding Anniversary Jewels <Badge>아주대학교 팀프로젝트</Badge>
      </Title>
      <P>
        결혼기념일 주년에 해당하는 보석들의 상품성, 원산지, 강도, 결정구조 등
        변수의 피쳐를 시각화로 표현한 인포그래픽 프로젝트입니다.
        <br /> 자세한 정보는 하단 Notion에 정리하였습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Notion</Meta>
          <Link
            href="https://www.notion.so/Final-Project-64036315cefc424782f0411de82eb8bf"
            isExternal
          >
            https://www.notion.so/Final-Project-64036315cefc424782f0411de82eb8bf{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>infographic</Meta>
          <Link
            href="https://file.notion.so/f/f/4eadb066-e21e-427f-b808-8ee0c8a774b1/e867c76d-1f18-45bc-b2ca-9edefaf16ce4/%EC%9D%B8%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4_Wedding_Anniversary_Stones.pdf?id=29ddf00b-9323-43d9-8cdb-3733062e43a3&table=block&spaceId=4eadb066-e21e-427f-b808-8ee0c8a774b1&expirationTimestamp=1707321600000&signature=uo2EArtjWKCedupCchDRTNpGW8wULxvZknX9OhkOYsA&downloadName=%EC%9D%B8%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4_Wedding+Anniversary+Stones.pdf"
            isExternal
          >
            Wedding Stones.pdf <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/infographic.jpg" alt="marriedNetwork" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
