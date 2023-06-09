import theme from '@/theme'
import Navigation from '@/components/Navigation'
import Consent from '@/components/Consent'
import Footer from '@/components/Footer'

const Layout = ({ metadata, children, ...props }) => (
  <div css={Layout.styles.element}>
    <div css={Layout.styles.container}>
      <aside css={Layout.styles.navigation}>
        <Navigation metadata={metadata} {...props} />
      </aside>
      <div css={Layout.styles.wrapper}>
        <Consent />
        {children}
        <div css={Layout.styles.footer}>
          <Footer metadata={metadata} {...props} />
        </div>
      </div>
    </div>
  </div>
)

Layout.styles = {
  element: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    minHeight: '100vh',
    maxWidth: '1920px',
    [theme.medias.large]: {
      flexDirection: 'row',
    },
    [theme.medias.extralarge]: {
      flexDirection: 'row',
    },
  },
  navigation: {
    height: '10em',
    display: 'flex',
    maxWidth: '100%',
    zIndex: 2,
    [theme.medias.large]: {
      position: 'fixed',
      width: '20em',
      height: '100vh',
    },
    [theme.medias.extralarge]: {
      position: 'fixed',
      width: '20em',
      height: '100vh',
    },
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxWidth: '100%',
    [theme.medias.large]: {
      paddingLeft: '20em',
      paddingBottom: '2em',
    },
    [theme.medias.extralarge]: {
      paddingLeft: '20em',
      paddingBottom: '2em',
    },
  },
  footer: {
    [theme.medias.small]: {
      display: 'none',
    },
    [theme.medias.medium]: {
      display: 'none',
    },
  }
}

export default Layout
