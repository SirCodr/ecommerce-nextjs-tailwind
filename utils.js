import data from "database/data"
const delay = 1200

export function getAllAvocados(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay); 
  })
}