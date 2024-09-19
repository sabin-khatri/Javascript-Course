let username = 'Sabin'

const user = {
  firstName: 'Santosh',
  lastName: 'Rai',
  pata: {
    city: 'Biratnagar',
    pinCode: 876876,
    state: 'bargachhi',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// Object.seal(user)
Object.freeze(user)

console.log('isGraduate' in user);