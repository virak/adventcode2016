//test
// code for day 1 part 1 adventcode
// WARNING: CHANGE THE INPUT ACCORDING TO YOUR NEEDS.
const moves = 'R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3'.split(',')

const positionData = moves.reduce((data, move) => {
  var state = data[0]
  var distance = data[1]
  const letfOrRight = move.trim().charAt(0)
  const howFar = parseInt(move.trim().slice(1))

  if (letfOrRight === 'L') {
    state = (state === 0) ? 3 : state - 1
  }
  if (letfOrRight === 'R') {
    state = (state === 3) ? 0 : state + 1
  }
  distance = (state === 1 || state === 0) ? distance + howFar : distance - howFar

  return [state, distance]
}, [0, 0])

console.log(`>>>> Distance is ${Math.abs(positionData[1])} <<<<`)
