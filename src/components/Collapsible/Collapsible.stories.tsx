import React from 'react'
import Collapsible from './index'

export default {
     title: 'Collapsible',
     component: Collapsible
}

export const Collapsed = () => (
     <Collapsible text="There is an accessibility issue here that will not be caught by AXE" />
)

export const Expanded = () => (
     <Collapsible title="My second tag" isCollapsed={true} />
)