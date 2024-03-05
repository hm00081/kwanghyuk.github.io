import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  // useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' // EmailIcon
import { BioSection, BioYear, PubSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io5' // IoLogoTwitter, IoLogoInstagram'
import Image from 'next/image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const TagsList = styled.ul`
  list-style: none;
  margin: 15px 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  background-color: white;
  background: white;
`

const TagItem = styled.li`
  float: left;
  margin-right: 10px; // Assuming you want some space between the tags
  color: white; // 텍스트 색상을 흰색으로
  background-color: #1a202c; // 배경색을 설정, 검은색 배경에 맞춤
  padding: 5px 10px; // Example tag padding
  border-radius: 5px; // Example tag border-radius
  font-size: 0.875em; // 폰트 크기 조정 (필요에 따라 조정)
  // 기타 스타일링이 필요한 경우 여기에 추가
`

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m a PhD student in Mila!
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} letterSpacing="wide" mt="1">
          <Heading as="h2" size="2xl" variant="page-title">
            Kwanghyuk Moon
          </Heading>

          <Box mt="3.5">
            웹프론트엔드 개발에 관심이 많은 문광혁입니다. 데이터 시각화를
            전공하였고, 데이터 분류, 분석을 위한 웹 기반 데이터 프로덕트 분야에
            관심이 많습니다. 대학원을 진학하며{' '}
            <Link
              as={NextLink}
              href="https://media.ajou.ac.kr/media/professor/professor01.jsp?include=view&article_no=200311010&board_wrapper=%2Fmedia%2Fprofessor%2Fprofessor01.jsp&pager.offset=0&board_no=305"
              passHref
              target="_blank"
            >
              이경원{' '}
            </Link>
            교수님에게 지도를 받았습니다. 교수님의 지도 아래 데이터를 기반으로
            한 의사결정이 쉽게 발견하지 못한 새로운 점을 분석할 수 있다는 것을
            배우게 되었습니다. 현재는 인물 데이터 간의 네트워크에서 발견하지
            못한 새로운 특징을 파악하는 데에 관심이 많아 이와 관련된 데이터 과학
            분야를 공부하고 있습니다.
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 4 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="180px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <div
              css={css`
                text-align: center;
              `}
            >
              <ProfileImage
                src="/images/khmoon.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="210"
                height="210"
              />
            </div>
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Experiences
        </Heading>
        <BioSection>
          <BioYear>2023.07 - 2024.02</BioYear>
          <BioYear>WEB FE Developer</BioYear>
          <BioYear>
            <Link
              as={NextLink}
              href="http://www.ajoudhistory.com/"
              passHref
              target="_blank"
            >
              아주대학교 인문과학연구소
            </Link>
          </BioYear>
        </BioSection>
        <li>
          아주대학교 인문과학연구소에서 데이터 분석과 시각화 개발에 참여하고
          있습니다. DB의 웹 크롤링과 조선왕족의 네트워크 데이터를 생성하여 이를
          분석하는 시각화 시스템 개발을 담당하고 있습니다.
        </li>
        <BioSection>
          <BioYear>2020.07 - 2023.06</BioYear>
          <BioYear>WEB FE Developer</BioYear>
          <BioYear>
            <Link
              as={NextLink}
              href="https://www.nrf.re.kr/index"
              passHref
              target="_blank"
            >
              한국연구재단 중견연구사업
            </Link>
          </BioYear>
        </BioSection>
        <li>
          한국연구재단에서 주관하는 중견연구사업에 참여하였습니다. 3년차 연구에
          참여하며 1년 차에는 감성 시각화 사례 및 이에 대한 분류체계 제작, 2년
          차에는 분류체계를 효과적으로 분석할 수 있는 시각화 시스템 제작, 3년
          차에는 토론 데이터를 사용한 감성 시각화를 제작하여 효과적으로 논쟁
          분석을 할 수 있는 시스템을 제작하였습니다.
        </li>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Educations
        </Heading>
        <BioSection>
          <BioYear>2021.3 - 2024.2</BioYear>
          <BioYear>미디어학 석사, 아주대학교</BioYear>
        </BioSection>
        <li>
          데이터 분석을 위한 웹 기반 시스템의 설계 및 개발에 대해 연구했습니다.
          다양한 데이터 분석 도구를 설계하고, 개발하고, 평가했습니다. 효과적인
          논쟁 분석을 위한 시각화 시스템 제안연구로 석사학위를 받았습니다.
        </li>
        <BioSection>
          <BioYear>2014.3 - 2020.8</BioYear>
          <BioYear>미디어학 학사, 아주대학교</BioYear>
        </BioSection>
        <li>
          디자인, 유저 인터페이스 디자인, 데이터 시각화 등을 공부했습니다.
          프로젝트를 중심으로 진행되었던 학교 생활 덕분에 다양한 지식과 기술을
          익힐 수 있었습니다.
        </li>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Researches and Research Assignment
        </Heading>
        <PubSection>
          <Link
            as={NextLink}
            href="https://journals.sagepub.com/doi/abs/10.1177/14738716241228593"
            passHref
            target="_blank"
          >
            An Exploration System to Effectively Analyze the Visual Metaphor
            Used in Sentiment Visualization
          </Link>
        </PubSection>
        Hyoji Ha, <b>Kwanghyuk Moon</b>, Hyerim Joung, Hyegyeong Kim, Kyungwon
        Lee.
        <br />
        (2024) Information Visualization
        <PubSection>
          <Link
            as={NextLink}
            href="https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=b5b5b02af0b4f4e1ffe0bdc3ef48d419&keyword=%EB%AC%B8%EA%B4%91%ED%98%81"
            passHref
            target="_blank"
          >
            A Study on the Visualization System Proposal for Effective Argument
            Analysis
          </Link>
        </PubSection>
        아주대학교 석사 학위 논문, 2024
        <br />
        <PubSection>
          <Link
            as={NextLink}
            href="https://drive.google.com/file/d/1tRtoMfkv7J9cZz1K4gtL7IOJy-4STOLA/view?usp=sharing"
            passHref
            target="_blank"
          >
            Towards Better Understanding: Proposing Effective Visualization
            Methods for Analyzing Argument in Debate
          </Link>
        </PubSection>
        <b>Kwanghyuk Moon</b>, Hyoji Ha, Kyungwon Lee.
        <br />
        In 2023 IEEE Visualization Conference (VIS) (pp. 1-2). IEEE.
        <PubSection>
          <Link
            as={NextLink}
            href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9966401"
            passHref
            target="_blank"
          >
            Exploration Tool for Effectively Interpreting the Visual Metaphor
            Process of Sentiment Visualization
          </Link>
        </PubSection>
        Hyoji Ha, <b>Kwanghyuk Moon</b>, Hyerim Joung, Hyegyeong Kim, Kyungwon
        Lee.
        <br />
        In Proceedings of the 2022 IEEE 12th Symposium on Large Data Analysis
        and Visualization (LDAV), Oklahoma City, USA, 16-21 October 2022; pp.
        1-2.
        <PubSection>
          <Link
            as={NextLink}
            href="http://www.aodr.org/xml/33136/33136.pdf"
            passHref
            target="_blank"
          >
            Constructing a Taxonomy for Sentiment Visualization Analysis Using
            Visual Metaphors
          </Link>
        </PubSection>
        Hyoji Ha, Hyerim Joung, <b>Kwanghyuk Moon</b>, Kyungwon Lee.
        <br />
        Archives of Design Research, 35(2), 181-207.
        <PubSection>
          <Link
            as={NextLink}
            href="https://sites.google.com/view/kias-gukak-2/home"
            passHref
            target="_blank"
          >
            한 데 울림: 국악 수학 미디어아트의 어울림
          </Link>
        </PubSection>
        초학제국악학회 제1회
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Competitions
        </Heading>
        <PubSection>
          <Link
            as={NextLink}
            href="https://campaign.naver.com/airush_2023/"
            passHref
            target="_blank"
          >
            NAVER AI RUSH 2022
          </Link>
          <br />
          AI를 활용한 효과적인 회의관리를 위한 기획업무 참여
        </PubSection>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Full Works
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hm00081" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hm00081
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/%EA%B4%91%ED%98%81-%EB%AC%B8-b744171ab/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:moonspl@ajou.ac.kr" isExternal>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
          Email: moonspl@ajou.ac.kr
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
