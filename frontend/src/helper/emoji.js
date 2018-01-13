import emoji from 'react-easy-emoji'

// 트위터 이모지팩 CDN 참고 예시: https://twemoji.maxcdn.com/2/test/preview.html
export const svgEmoji = input => {
  return emoji(input, {
    baseUrl: '//twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
  })
}
