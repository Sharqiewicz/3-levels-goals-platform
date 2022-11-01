import Container from '../components/container'
import Goal from '../components/goal'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllGoalsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index(props) {
  const { goals } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>3poziomy Kacper Szarkiewicz</title>
        </Head>
        <Container>
          <Intro /> 
          {
            goals && goals.map( goal => <Goal {...goal} />)
          }
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllGoalsForHome()
  const goals = data?.data?.goalCollection?.items || [];
  return {
    props: { goals },
  }
}
