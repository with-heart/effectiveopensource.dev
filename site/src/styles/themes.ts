import {createTheme} from './system'

export const pinkTheme = createTheme({
  colors: {
    accentLight: '$pink300',
    accentText: '$pink600',
    accentSolid: '$pink600',
    listBulletText: '$pink400',
    listBulletSolid: '$pink300',
    headingText: '$pink900',
  },
})

export const emeraldTheme = createTheme({
  colors: {
    accentLight: '$emerald300',
    accentText: '$emerald600',
    listBulletText: '$emerald500',
    listBulletSolid: '$emerald300',
    preBg: '$emerald900',
  },
})

export const violetTheme = createTheme({
  colors: {
    accentLight: '$violet300',
    accentText: '$violet600',
    accentSolid: '$violet600',
    listBulletText: '$violet400',
    listBulletSolid: '$violet300',
    headingText: '$violet900',
  },
})
