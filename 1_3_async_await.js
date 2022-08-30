const promise = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved({ name: 'Jessi' });
    }, 1000);
});

async function getData() {
    const res = await promise;
    console.log(res);
}

getData();

fetch('')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

async function getUser() {
    const res = await fetch('');
    const user = await res.json();

    const res2 = await fetch(`https://teachyleaf.in/${user.id}`);
    const products = res2.json();

    console.log(products);
}
