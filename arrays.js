var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ... array]
<<<<<<< HEAD
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  var newArray = [... array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
 array.shift()
 return array
}

function removeElementFromBeginningOfArray (array) {
  var ogArray = array.slice(1)
  return ogArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  var exArray = array.slice(0, array.length -1)
  return exArray
=======
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray (array, element) {
  var newerArray = [array, ... element]
}

function destructivelyAddElementtoEndofArray (array, element) {
  return array.push(element)
>>>>>>> f491082cc4211e79b2789bcabe421bc142ce3c1b
}