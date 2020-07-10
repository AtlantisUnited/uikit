import styled                             from '@emotion/styled'
import React, { FC, useEffect, useState } from 'react'
import { useTheme }                       from 'emotion-theming'

interface Props {
  color?: string
  hoverColor?: string
  clickedColor?: string
  children?: any
}

const IconUI = styled.div({
  cursor: 'pointer',
  display: 'inline-flex',
})

export const IconsManager: FC<Props> = ({ children, hoverColor, clickedColor, color }) => {
  const theme = useTheme<any>()
  const themeColor = theme.colors[color] || color
  const themeHoverColor = theme.colors[hoverColor] || hoverColor
  const themeClickedColor = theme.colors[clickedColor] || clickedColor

  const [currentColor, setCurrentColor] = useState(themeColor)

  useEffect(() => {
    setCurrentColor(themeColor)
  }, [themeColor])

  return (
    <IconUI
      onMouseEnter={() => setCurrentColor(themeHoverColor || color)}
      onMouseLeave={() => setCurrentColor(color)}
      onMouseDown={() => setCurrentColor(themeClickedColor || color)}
      onMouseUp={() => setCurrentColor(color)}
    >
      {React.cloneElement(children, { key: 'a', color: currentColor })}
    </IconUI>
  )
}