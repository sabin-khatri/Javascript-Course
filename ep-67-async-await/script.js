function fetchData() {
    return new  Promise((resolve) =>{
        setTimeout(() => {
            resolve("API बाट डेटा प्राप्त भयो");
        }, 2000);
    });

}
async function getData(params) {
    console.log("डेटा ल्याउँदैछ...");
    const result = await fetchData();
    console.log(result);
}
getData();