type FontWeight = typeof weights[number]

type FontStyle = 'normal' | 'italic'

type FontConfig = {
  [Key in FontStyle]: string
}

interface FontFace {
  fontFamily: string
  fontStyle: FontStyle
  fontWeight: FontWeight
  fontDisplay: 'swap'
  src: string
}

const weights = [100, 200, 300, 400, 500, 600, 700, 800] as const

const createFontFaces = (fontFamily: string, map: FontConfig): FontFace[] => {
  const createFontFace = (fontStyle: FontStyle, src: string) => (
    fontWeight: FontWeight,
  ) =>
    ({
      fontFamily,
      fontWeight,
      fontStyle,
      fontDisplay: 'swap',
      src,
    } as FontFace)

  const createNormalWeight = createFontFace('normal', map.normal)
  const createItalicWeight = createFontFace('italic', map.italic)

  const normalFontFaces = weights.map(createNormalWeight)
  const italicFontFaces = weights.map(createItalicWeight)

  return [...normalFontFaces, ...italicFontFaces]
}

export const newsreader = createFontFaces('Newsreader', {
  normal:
    "url(https://fonts.gstatic.com/s/newsreader/v7/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ5ayZC.woff2) format('woff2')",
  italic:
    "url(https://fonts.gstatic.com/s/newsreader/v7/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbARA_n8.woff2) format('woff2')",
})

export const inter = createFontFaces('Inter', {
  normal:
    "url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZJhjp-Ek-_EeAmM.woff) format('woff')",
  italic:
    "url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZJhjp-Ek-_EeAmM.woff) format('woff')",
})
