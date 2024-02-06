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
  <Layout title="sooyeonjang">
    <Container>
      <Title>
        Sooyeonjang <Badge>아주대학교 IDLab</Badge>
      </Title>
      <P>
        고려시대 왕의 장수를 기원하는 수연장지곡에서 나타난 도드리의 군집을
        사이클로 표현한 동시발생 행렬 시각화입니다. <br />
        1. 현재는 각 사이클이 음악이 진행될 때 언제 등장하는 지를 히트맵으로
        시각화하였다. (히트맵의 각 변수는 정간보의 음 진행을 뜻한다. 정간보에는
        0 정간보부터 440 정간보의 러닝타임이 있고 각 정간보의 한 칸(한 칸이 곧
        히트맵의 변수)은 n0~n32의 노드정보가 포함되어있다. (중임무황태 등의
        pitch 정보 = node) <br />
        2. 각 사이클마다 서로 다른 히트맵 뷰가 제공된다. 각 사이클 선택은
        드롭다운 메뉴로 제공이되고, 사용자가 원하는 사이클을 선택하면 그에 대한
        히트맵을 볼 수 있도록 한다. 현재는 여러 개의 사이클이 등장하는 정간보의
        구간을 설정해서 히트맵을 표현한다. (0~440 정간보 모두를 나타내는 것이
        아니라는 뜻이다. <br /> 3. [새롭게 추가된 기획] 특정 사이클은 정간보가
        진행될 때 한번만 나오는 게 아니라 여러 번 등장하게 된다. 이 때, 반복해서
        등장하는 사이클이 이전에 등장한 사이클과 얼마만큼의 유사도를 가지는 지를
        히트맵에 시각화 할 수 있다고 판단하였다. <br />
        4. 유사도는 특정 사이클 구조에 대해서 음이 진행되는 순서와 음의 일치도를
        고려하여 계산된다. 자세한 계산 방법은 아래와 같다. 특히, 음의 일치 뿐만
        아니라 음의 순서까지 일치하면 비교하고자 하는 두 사이클(여기서 두
        사이클은 첫번째로 등장한 사이클 N 과 일정 시간 간격을 두고 다시 반복되어
        등장한 사이클 N'를 말한다.)이 더욱 일치한다라는 것을 보여주기 위해
        가중치를 설정하고자 한다.
        <br /> 자세한 정보는 하단 Notion에 정리하였습니다.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Conference</Meta>
          <Link
            href="https://sites.google.com/view/kias-gukak-2/home"
            isExternal
          >
            https://sites.google.com/view/kias-gukak-2/home{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Notion</Meta>
          <Link
            href="https://www.notion.so/6dd8ca2c2e1342a1825da485430c5e23"
            isExternal
          >
            https://www.notion.so/6dd8ca2c2e1342a1825da485430c5e23{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hm00081.github.io/sooyeonjang2/" isExternal>
            https://hm00081.github.io/sooyeonjang2/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hm00081/sooyeonjang2" isExternal>
            https://github.com/hm00081/sooyeonjang2{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sooyeonjang.jpg" alt="marriedNetwork" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
