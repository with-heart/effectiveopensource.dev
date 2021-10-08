import React from 'react'
import {Seedlings} from './Seedlings'

export default {
  title: 'Components/Seedlings',
  component: Seedlings,
}

export const Small = () => <Seedlings size="sm" />

export const Large = () => <Seedlings size="lg" />
