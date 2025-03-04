import { getData } from "../api/data";

getData().then(data => {
    console.log(data);
});
getData();