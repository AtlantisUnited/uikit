export function contentWidth(el) {
  const style = window.getComputedStyle(el, null)
  const pleft = Number(style.getPropertyValue('padding-left').replace('px', ''))
  const pright = Number(style.getPropertyValue('padding-right').replace('px', ''))

  return el.clientWidth - pleft - pright
}

export function widthWithMargin(el) {
  const style = window.getComputedStyle(el, null)
  const bLeft = Number(style.getPropertyValue('border-left').replace(/px.*/, ''))
  const bRight = Number(style.getPropertyValue('border-right').replace(/px.*/, ''))
  const mleft = Number(style.getPropertyValue('margin-left').replace('px', ''))
  const mright = Number(style.getPropertyValue('margin-right').replace('px', ''))

  return el.clientWidth + bLeft + bRight + mleft + mright
}
