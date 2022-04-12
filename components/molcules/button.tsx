import { Text } from 'components/atom'
import { Component} from 'components/template'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}


function Button(props : Props) {
    const { ...rest } = props
  return (
      <Component>
        <button {...rest}>
            <Text >Text입니다,</Text>
         </button>
      </Component>
  )
}

export default Button