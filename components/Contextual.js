import { useState } from 'react'
import useEvent from 'react-use/lib/useEvent'
import theme from '@/theme'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

const Contextual = ({ work, ...props }) => {
  const sizes = {
    high: {
      height: [1, 200],
      width: [1, 300],
      style: {
        width: '100%',
        padding: '0% 36% 0% 14%',
        margin: `9% 0% 23%`,
        '>span': {
          height: 'auto',
          width: `${(((work.dimensions || {}).width / 235) * 100)}%`,
        },
      },
    },
    small: {
      height: [1, 70],
      width: [1, 95],
      style: {
        width: `${(((work.dimensions || {}).width / 100) * 100)}%`,
        margin: `${35 - (30 * ((work.dimensions || {}).height / 70))}% 0 70%`,
      },
    },
  }

  const key = Object.keys(sizes).filter(size => (
    (work.dimensions || {}).height >= sizes[size].height[0]
    && (work.dimensions || {}).height <= sizes[size].height[1]
    && (work.dimensions || {}).width >= sizes[size].width[0]
    && (work.dimensions || {}).width <= sizes[size].width[1]
  )).pop()

  const size = sizes[key]
  const [open, setOpen] = useState(false)
  
  useEvent('keydown', (e) => !(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) && setOpen(false), typeof document !== 'undefined' && document)
  useEvent('scroll', () => setOpen(false), typeof window !== 'undefined' && window)

  if (!key || !work.dimensions || !work.dimensions?.width || !work.dimensions?.height) {
    return null
  }

  return (
    <div {...props}>
      <button onClick={() => setOpen(true)}>
        <Icon children="eye" style={{ margin: '0 0.5rem 0 0' }} />
        Voir l'oeuvre au mur
      </button>
      <div
        css={{
          ...Contextual.styles.modal,
          top: typeof window === 'undefined' ? 0 : window.scrollY,
          [theme.medias.small]: {
            top: typeof window === 'undefined' ? 0 : `calc(${window.scrollY}px - 10em)`,
          },
          [theme.medias.medium]: {
            top: typeof window === 'undefined' ? 0 : `calc(${window.scrollY}px - 10em)`,
          },
        }}
        hidden={!open}>
        <div css={Contextual.styles.container}>
          <div css={Contextual.styles.body}>
            <div css={Contextual.styles.wall}>
              <Image src={`https://galerie-gaia.s3.eu-west-3.amazonaws.com/forestry/assets-wall-${key}.jpg`} rel="preload" />
              <div
                css={{
                  ...Contextual.styles.work,
                  ...size.style
                }}
              >
                <Image src={work.image} />
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} style={Contextual.styles.close} />
      </div>
    </div>
  )
}

Contextual.styles = {
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: 9,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  body: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100vh',
  },
  wall: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    maxHeight: '100vh',
    '>span>img': {
      height: 'auto',
      maxHeight: '100vh',
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
    },
  },
  work: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    '>span': {
      height: 'auto',
      '>img': {
        objectFit: 'contain',
        background: 'transparent',
      },
    },
  },
  close: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0,
    top: 0,
    cursor: 'zoom-out',
  },
}

export default Contextual
