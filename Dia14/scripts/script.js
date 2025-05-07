async function GetApi() {
    try {
        const API = await fetch('https://681a86c417018fe50578103f.mockapi.io/heroes')
        const data = await API.json();
        console.log(data)
        return(data)
    }catch(error){
        console.log('Error', error)
    }
}
GetApi()