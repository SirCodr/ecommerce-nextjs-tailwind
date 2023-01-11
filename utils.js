import data from "database/data"
const delay = 0

export function getAllAvocados(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay); 
  })
}

export function getAvocadoById(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[id])
    }, delay)
  })
}

export function getAllAvocadoIds(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const avocadoIds = Object.keys(data)
      resolve(avocadoIds)
    }, delay)
  })
}