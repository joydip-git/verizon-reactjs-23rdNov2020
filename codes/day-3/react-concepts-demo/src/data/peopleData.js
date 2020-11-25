let people = [
    {
        id: 1,
        name: 'sunil',
        age: 20,
        location: 'bangalore'
    },
    {
        id: 2,
        name: 'anil',
        age: 30,
        location: 'chennai'
    },
    {
        id: 3,
        name: 'joydip',
        age: 40,
        location: 'mumbai'
    }
]

export const getPeople = () => {
    return people;
}
export const getPersonById = (id) => {
    return people.find(p => p.id === id)
}
export const updatePeople = (peopleArray) => {
    people = peopleArray
}