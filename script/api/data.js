export async function getData() {
    let response = await fetch('../api/recipes.json');
    let data = await response.json();
    return data;

}


getData();
console.log('====================================');
console.log(getData());
console.log('====================================');
