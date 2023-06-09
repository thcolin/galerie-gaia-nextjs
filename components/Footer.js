import theme from '@/theme'
import Icon from '@/components/Icon'
import Cart from '@/components/Cart'

const Footer = ({ metadata, ...props }) => (
  <footer css={Footer.styles.element}>
    <div>
      <Cart />
    </div>
    <p>
      {metadata.opening}
    </p>
    <a href={`tel:${metadata.phone}`} style={{ whiteSpace: 'nowrap' }}>
      {metadata.phone}
    </a>
    <br />
    <a href={`mailto:${metadata.email}`} style={{ whiteSpace: 'nowrap' }}>
      {metadata.email}
    </a>
    <div>
      <a href={metadata.instagram} target='_blank' rel='noopener noreferrer'><Icon children='instagram' /></a>
      <a href={metadata.facebook} target='_blank' rel='noopener noreferrer'><Icon children='facebook' /></a>
    </div>
  </footer>

)

Footer.styles = {
  element: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    '>*': {
      padding: '0.25em 0',
    },
    '>a': {
      fontSize: '0.875em',
    },
    '>div': {
      '>a': {
        padding: '0 0.5em',
      },
    },
    [theme.medias.large]: {
      position: 'fixed',
      flexDirection: 'row',
      bottom: 0,
      left: 0,
      width: '100%',
      '>*': {
        padding: '0 1em',
      },
    },
    [theme.medias.extralarge]: {
      position: 'fixed',
      flexDirection: 'row',
      bottom: 0,
      left: 0,
      width: '100%',
      '>*': {
        padding: '0 1em',
      },
    },
  },
}

export default Footer
