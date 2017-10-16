// import * as types from '../actions/ActionTypes'
// import map from 'lodash/map'

// // 1. db 값 받는 action
// export const fetchWeightToDB = payload => {
//   return dispatch => {
//     fetch(`api/weight/`)
//       .then(res => res.json())
//       .then(data => {
//         dispatch({
//           type: types.FETCHED_WEIGHT_SUCCESS,
//           payload: map(
//             data,
//             (weightItem, id) => ({
//               id,
//               ...weightItem,
//             }),
//           ),
//         })
//       })
//       .catch(error => {
//         console.log('error')
//       })
//   }
// }

// // 2. input에서 받은 값을 db로 보내는 action(post)
// export const postWeightToDB = payload => {
//   return dispatch => {
//     dispatch({
//       type: types.POST_WEIGHT_REQUEST,
//     })
//     fetch(`api/weight/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     }).catch(error => {
//       dispatch({
//         type: types.POST_WEIGHT_FAILD,
//       })
//     })
//   }
// }
