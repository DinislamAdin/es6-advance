const user = [{ id: 1, name: 'abul', job: 'doctor' }];

// console.log(user[0].name);

const data = {
    count: 500000,
    data: [
        { id: 1, name: 'abul', job: 'doctor' },
        { id: 2, name: 'dbul', job: 'doctor' },
        { id: 3, name: 'cbul', job: 'doctor' },
        { id: 4, name: 'ebul', job: 'doctor' }
    ]
}

const fourtJob = data.data[3].name;
// console.log(fourtJob);


const use = {
    id: 65942,
    name: 'tomas alba adisun',
    address: {
        street: {
            frist: 'dabenagur, khulna',
            secand: 'third folor',
            third: 'rite side',
        },
        postoffice: 'cantorment',
    }
}


const side = use.address.street.third;
console.log(side)