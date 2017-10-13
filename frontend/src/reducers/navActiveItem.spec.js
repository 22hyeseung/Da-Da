import navActiveItemReducer from './navActiveItem'

describe('navActiveItemReducer', () => {
  describe('When initialized', () => {
    it('return default state', () => {
      expect(navActiveItemReducer()).toEqual(
        INITIAL_STATE,
      )
    })
  })
})

describe('When action type is CHANGE_NAV_ITEM_ACTIVE', () => {
  describe('changes activeNavItem value', () => {
    const action = {
      type: 'CHANGE_NAV_ITEM_ACTIVE',
      payload: '리포트',
    }
    const initialState = navActiveItemReducer()

    expect(
      navActiveItemReducer(initialState, action),
    ).toEqual({
      payload: '리포트',
    })
  })
})
