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
  <Layout title="uxdesign">
    <Container>
      <Title>
        Sooyeonjang <Badge>아주대학교 IDLab</Badge>
      </Title>
      <P>
        기부 앱 Smiler UX Design 팀 프로젝트입니다. Service Flow, User Scenario,
        Experience Map, Sitemap, Wireframe, Mockup 등 작업을 진행하였습니다.
        자세한 사항은 Notion에 기록을 하였습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Notion</Meta>
          <Link
            href="https://www.notion.so/UX-Design-App-Project-2bc3b1560b524d349b81dd4c256579af"
            isExternal
          >
            https://www.notion.so/UX-Design-App-Project-2bc3b1560b524d349b81dd4c256579af{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Prototype</Meta>
          <Link href="https://share.protopie.io/iJcBpk5jThQ " isExternal>
            https://share.protopie.io/iJcBpk5jThQ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/uxdesign.jpg" alt="uxdesign" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
