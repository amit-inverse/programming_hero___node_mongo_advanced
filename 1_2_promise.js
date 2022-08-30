// pending
// resolved
// rejected

const myPromise = new Promise((resolved, rejected) => {
    // const user = null;
    const user = { id: 1 };

    if (!user) {
        rejected('Something went wrong');
    } else {
        setTimeout(() => {
            // resolved('Successful.');
            resolved({ name: 'Jessi' });
        }, 1000);
    }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    // myPromise.then((user) => {
    //     userData.push(user);
    // });
    userData.push(myPromise);
}

Promise.all(userData).then((res) => {
    console.log(res);
});

console.log(userData);

myPromise.then((res) => console.log('found in then...', res)).catch((err) => console.log('found in catch...', err));

console.log('done!');
