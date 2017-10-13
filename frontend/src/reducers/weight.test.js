import {
  weigthListReducer,
  DEFAULT_WEIGHT_LISTS,
} from './weight'

//처음에는 테스트할 대상의 이름을 써준다.
describe('weightListReducer', () => {
  describe('when initialized', () => {
    it('returns default state', () => {
      expect(weigthListReducer()).toEqual(
        DEFAULT_WEIGHT_LISTS,
      )
    })
  })
  // describe('when action type is CHANGE_COLOR', () => {
  //   it('changes rootColor value', () => {
  //     const action = {
  //       type: 'CHANGE_COLOR',
  //       payload: [1, 2, 3],
  //     }
  //     const initialState = colorsReducer()
  //     expect(
  //       colorsReducer(initialState, action),
  //     ).toEqual({
  //       rootColor: [1, 2, 3],
  //     })
  //   })
  // })
})
