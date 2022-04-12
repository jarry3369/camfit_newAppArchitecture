import React from 'react'

interface Props {
    children: React.ReactNode
}

function Text(props: Props) {
    const { children  } = props;
  return (
    <span>{children}</span>
  )
}

export default Text