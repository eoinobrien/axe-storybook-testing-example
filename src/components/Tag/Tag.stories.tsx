import React from 'react'
import Tag from './index'

export default {
     title: 'Tag title',
     component: Tag,
     argTypes: {
          backgroundColor: {
               control: 'color'
          }
     },
     args: {
          title: "My Title",
          backgroundColor: "red"
     }
}

export const Basic = (args: any) => (
     <Tag {...args}/>
)
