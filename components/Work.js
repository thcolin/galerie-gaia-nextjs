import Link from 'next/link'
import useHover from '@/hooks/use-hover'
import theme from '@/theme'
import Image from '@/components/Image'

const Work = ({ title, image, url, ...props }) => {
  const [hoverRef, isHovered] = useHover()

  return (
    <Link {...props} title={title} href={url} css={Work.styles.element} ref={hoverRef}>
      <Image src={image} source="thumbnail" />
      <span
        css={Work.styles.overlay}
        style={{
          transform: `translateY(${isHovered ? '0%' : '-100%'})`,
        }}
      >
        <h2>{title}</h2>
      </span>
      <label>{title}</label>
    </Link>
  )
}

Work.styles = {
  element: {
    position: 'relative',
    display: 'block',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    '>span': {
      height: 'calc(100% - 3rem)',
      '>img': {
        objectFit: 'cover',
      },
    },
    '>label': {
      display: 'block',
      textAlign: 'center',
      fontWeight: 600,
      padding: '1rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  },
  overlay: {
    [theme.medias.small]: {
      display: 'none',
    },
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: '0 2em',
    backgroundColor: theme.colors.shadow,
    color: theme.colors.white,
    fontSize: '1.25em',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.5,
    transition: 'transform 300ms ease-in-out',
    '>h2': {
      display: '-webkit-box',
      overflow: 'hidden',
      '-webkit-line-clamp': '3',
      '-webkit-box-orient': 'vertical',
      maxHeight: 'calc(100% - 2em)',
      margin: '1em 0',
    },
  },
  image: {
    objectFit: 'cover',
  },
}

export default Work
