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
  <Layout title="grad">
    <Container>
      <Title>
        A Study on the Visualization System Proposal for Effective Argument
        Analysis <Badge>아주대학교 석사 학위 논문</Badge>
      </Title>
      <P>
        <div
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
        >
          국문 초록
        </div>{' '}
        토론은 주제에 대해 입장을 지닌 참여자들이 논증적인 의사소통을 통해
        이루어지며, 다양한 의견을 나누고 문제 해결에 도달하는 중요한 접근법이다.
        토론에서 나타나는 논쟁은 토론의 핵심적인 요소로서 논쟁이 일어나는
        구간에서 토론 참여자 간 키워드를 파악하면 어떤 관점을 주장하고, 반론을
        제시하는지 이해할 수 있으며 토론의 진행 상황과 합리적 결론이 도출되는 지
        파악하는데 도움이 된다. 본 연구는 토론과 논쟁의 특성을 파악하고, 토론의
        주요 분석 목적인 논쟁의 탐지와 논쟁의 비교를 두 가지 시각화로
        표현함으로써 논쟁을 쉽게 탐지하고 참여자들의 입장 및 의견을 비교하는
        데에 초점을 맞추었다. 또한 사람마다 시각화 해석의 차이를 최소화하고자
        시각적 은유를 활용하여 논쟁 요소를 직관적이고 이해하기 쉽도록 돕는
        방식을 채택하였다. 시각적 은유는 특정한 연관성이나 유사성을 표현하는
        이미지로서, 복잡한 데이터를 간편하게 이해할 수 있게 도와준다. 연구를
        위해 1) 토론 및 논쟁을 분석한 연구들과 토론 및 논쟁을 분석한 시각화
        연구들을 수집하여 2) 시각화를 제작한 목적을 분석하여 어떠한 것을
        나타내기 위해 수집한 시각적 은유가 사용된 토론 및 논쟁 연구들을
        분석한다. 분석 결과 논쟁을 분석하기 위한 목적으로는 ‘논쟁이 나타나는
        구간 탐지’와 ‘논쟁 표현 비교’가 많이 사용되었다. 그리고 논쟁 구간
        탐지에서는 건축물을 활용한 은유 표현이 많이 사용되었고, 논쟁 표현 비교를
        위해서는 화합물을 활용한 은유 표현이 많이 사용되는 것을 확인하였다.
        실제로 해당 분석 결과의 유용성을 판단하기 위해 논쟁의 탐지를 위한
        시각화에서는 건축물 기반 은유 시각화를 선정하였으며 논쟁의 비교를 위한
        시각화에서는 화합물 기반 은유 시각화를 선정하여 제작하였다. 3) 각
        시각화의 디자인 요구 사항을 정리하여 두 시각화의 목적을 정의하였고 4)
        시각화의 디자인 요구사항이 각 시각화에서 ii 어떻게 표현되는 지 설명한다.
        5) 그리고 유저 시나리오를 이용하여 두 시각화의 접근 방식 및 유용성을
        설명하였으며 6) 마지막으로 시각화 관련 전공자와 자연어처리를 활용한
        경험이 있는 참여자들을 대상으로 한 검증을 진행하여 본 연구의 시각화
        사용성 검증 과정과 비교 실험 이해도 평가와 시각화 해석 능력 평가를
        진행하였다. 본 연구에서 제안하는 두 시각화는 관련 분야의 연구자나
        분석가에게 ‘토론에서의 논쟁을 보다 쉽게 탐지하고 비교하는 데 있어 어떠한
        시각화가 더 유용한지’에 대해 직관적으로 파악할 수 있도록 만들어준다는
        점에 의의가 있다. <br />
        주제어: 토론 시각화, 시각적 은유, 정보 디자인, 자연어 처리
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>YouTube</Meta>
          <Link
            href="https://youtu.be/vq4MKZUcXxg?si=FagfCn3r1KiIhA5"
            isExternal
          >
            https://youtu.be/vq4MKZUcXxg?si=FagfCn3r1KiIhA5{' '}
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
          <Meta>Tech Report</Meta>
          <Link
            href="https://dcoll.ajou.ac.kr/dcollection/public_resource/pdf/000000033756_20240303155043.pdf"
            isExternal
          >
            https://dcoll.ajou.ac.kr/dcollection/public_resource/pdf/000000033756_20240303155043.pdf{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/vis2023.jpg" alt="ogblsc" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://youtu.be/vq4MKZUcXxg?si=FagfCn3r1KiIhA5i"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
