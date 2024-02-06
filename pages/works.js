import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react' // Divider
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/ogb_member.jpg'
import vis2023 from '../public/images/works/vis2023_1094.jpg'
import grad from '../public/images/works/vis2023.jpg'
import marriedNetwork from '../public/images/works/marriedNetwork.jpg'
import aodr2022 from '../public/images/works/aodr_2022.jpeg'
import vis2022 from '../public/images/works/metaphorvis_2022.jpeg'
import jewel from '../public/images/works/infographic.jpg'
import virtualcv from '../public/images/works/virtualCV.jpg'
import uxdesign from '../public/images/works/uxdesign.jpg'
import sentiviz from '../public/images/works/sentiivz_1.jpeg'
import sentivizTwo from '../public/images/works/sentiviz_2.jpeg'
import sooyeonjang from '../public/images/works/sooyeonjang.jpg'
import metaphorBERT from '../public/images/works/epoch_50_bert.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Researches
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="grad"
            title="A Study on the Visualization System Proposal for Effective Argument
            Analysis"
            thumbnail={grad}
          >
            아주대학교 석사 학위 논문
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="vis2023"
            title="Towards Better Understanding: Proposing Effective Visualization
            Methods for Analyzing Argument in Debate"
            thumbnail={vis2023}
          >
            IEEE VIS 2023 Poster
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="vis2022"
            title="Exploration Tool for Effectively Interpreting the Visual Metaphor Process of Sentiment Visualization"
            thumbnail={vis2022}
          >
            IEEE VIS LDAV 2022 Poster
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="aodr"
            title="Constructing a Taxonomy for Sentiment Visualization Analysis Using Visual Metaphors"
            thumbnail={aodr2022}
          >
            AODR 2022 Journal
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Personal Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="marriedNet"
            thumbnail={marriedNetwork}
            title="Joseon Kingdom Married Network"
          >
            GCN을 활용한 조선왕조 족보 및 혼인 네트워크 시각화
            <br />
            제작기간: 2023.09 ~ 2023.12
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="metaphorBERT"
            thumbnail={metaphorBERT}
            title="Sentiment Visualization Paper BERT model"
          >
            감성 시각화를 사용한 논문에서 나타나는 분류체계와 관련된 텍스트
            학습을 위한 BERT 모델
            <br />
            제작기간: 2022.04 ~ 2021.06
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sentivis" thumbnail={sentiviz} title="SentiVis">
            감성시각화 분류체계 필터링을 통한 논문정보 검색 시스템
            <br />
            제작기간: 2022.01 ~ 2021.03
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="sooyeonjang"
            thumbnail={sooyeonjang}
            title="Sooyeonjang"
          >
            수연장지곡 도드리 사이클 음악 시각화
            <br />
            제작기간: 2021.03 ~ 2021.05
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Design and Data Visualziation
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="jewel"
            thumbnail={jewel}
            title="Wedding Anniversary Jewel Infographics"
          >
            결혼기념일 보석 인포그래픽
            <br />
            제작기간: 2021.04 ~ 2021.06
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="virtualcv"
            thumbnail={virtualcv}
            title="Virtual CV Design"
          >
            가상 이력서 인포그래픽
            <br />
            제작기간: 2021.03 ~ 2021.04
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="uxdesign" thumbnail={uxdesign} title="Smiler">
            기부 앱 Smiler UX Design
            <br />
            제작기간: 2019.04 ~ 2019.06
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
