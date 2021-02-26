import ScrollLock        from 'react-scrolllock'
import document          from 'global/document'
import React, { useRef } from 'react'
import { motion }        from 'framer-motion'
import { createPortal }  from 'react-dom'
import { flexbox }       from 'styled-system'
import { switchProp }    from 'styled-tools'

import styled            from '@emotion/styled'

interface ContainerProps {
  visible: boolean
  opacity: string
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const opacities = switchProp('opacity', () => ({
  small: {
    background: 'rgba(0, 0, 0, 0.2)',
  },
  large: {
    background: 'rgba(0, 0, 0, 0.8)',
  },
}))

const StyledContainer = styled(motion.nav)<ContainerProps>(
  ({ visible }) => ({
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: visible ? 'flex' : 'none',
    zIndex: visible ? 10 : 'initial',
    background: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  opacities,
  flexbox
)

export const Modal = ({ children, visible, onClose, opacity = 'large', ...rest }) => {
  if (typeof window !== 'undefined') {
    const node = useRef(null)

    const handleClick = (event) => {
      if (!(node.current && node.current.children[0].contains(event.target))) {
        onClose()
      }
    }

    if (visible) {
      return createPortal(
        <ScrollLock>
          <StyledContainer
            onClick={handleClick}
            animate={visible ? 'visible' : 'hidden'}
            variants={variants}
            visible={visible}
            opacity={opacity}
            {...rest}
            ref={node}
          >
            {children}
          </StyledContainer>
        </ScrollLock>,
        document.body
      )
    }
  }
  return null
}
