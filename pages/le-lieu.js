import { useTina } from 'tinacms/dist/react'
import client from '@/tina/__generated__/client'
import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import RichText from '@/components/RichText'
import ContactForm from '@/components/Contact'
import theme from '@/theme'

export const getStaticProps = async ({ params }) => {
  try {
    return {
      props: {
        tina: {
          page: await client.queries.page_where({ relativePath: 'index.md' }),
          metadata: await client.queries.metadata({ relativePath: 'index.md' }),
        }
      },
    }
  } catch (e) {
    return { props: {} }
  }
}

const Where = ({ tina, ...props }) => {
  const { data: { page_where: page } } = useTina(tina.page)
  const { data: { metadata } } = useTina(tina.metadata)

  return (
    <Layout metadata={metadata} {...props}>
      <SEO
        title={page.seo.title}
        description={page.seo.description}
        image={page.seo.image}
        metadata={metadata}
      />
      <section css={Where.styles.description}>
        <h1>{page.seo.heading}</h1>
        <RichText>{page.content}</RichText>
      </section>
      <hr />
      <section css={Where.styles.map}>
        <h2>Retrouvez-nous</h2>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.4944216334337!2d-1.5545014000000081!3d47.21701889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eea43d94603f%3A0x80d16ddf85a1722f!2s4+Rue+F%C3%A9nelon%2C+44000+Nantes%2C+France!5e0!3m2!1sfr!2s!4v1426235401784' />
        <small>4 Rue Fénelon, 44000 Nantes, France</small>
      </section>
      <hr />
      <section css={Where.styles.contact}>
        <h2>Newsletter</h2>
        <RichText>{page.about}</RichText>
        <ContactForm id="uth7YJ01" method='newsletter' />
      </section>
      <section css={Where.styles.contact}>
        <h2>Contact</h2>
        <ContactForm id="qJR6evrvE_8YqOTqPnVUU" />
      </section>
    </Layout>
  )
}

Where.styles = {
  description: {
    padding: '2rem 2rem 0',
    '>h1': {
      margin: '0 0 2rem',
      fontSize: '2rem',
      color: theme.colors.black,
    },
    '>div': {
      lineHeight: '1.5',
      '>p:first-child': {
        float: 'left',
        width: '30rem',
        maxWidth: '50%',
        padding: '0 1rem 1rem 0',
        margin: 0,
        [theme.medias.small]: {
          display: 'flex',
          justifyContent: 'center',
          float: 'initial',
          width: 'auto',
          maxWidth: 'initial',
          padding: 0,
          '>span': {
            maxWidth: '30rem',
          },
        },
      },
    },
    '>strong': {
      display: 'block',
      textAlign: 'right',
    },
  },
  map: {
    padding: '0 2rem',
    '>h2': {
      margin: '0 0 1rem',
      fontSize: '1.5rem',
      color: theme.colors.black,
    },
    '>iframe': {
      width: '100%',
      height: '40rem',
      maxHeight: '50vh',
      border: 'none',
      padding: '1rem 0',
    },
  },
  contact: {
    padding: '0 2rem 2rem',
    '>h2': {
      margin: '0 0 1rem',
      fontSize: '1.5rem',
      color: theme.colors.black,
    },
    '>div': {
      lineHeight: '1.5',
    },
    '>form': {
      '>textarea': {
        height: '8rem',
      },
    },
  },
}

export default Where
