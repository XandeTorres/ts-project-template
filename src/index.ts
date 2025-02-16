// import http from 'http'
// import fs, {readFile} from 'fs'
// let q: number = 31
// let s: any = '1'
// console.log(q);
// console.log(q + s);
// const array: (number | string)[] = []
// const ar2: Array<number | string> = []

// array.push('1')

//чтобы установить библиотеку надо написать npm i axios
// чтобы указать определенную версию библиотеки/пакета нужно указать npm i axios@0.27.2
import axios from "axios"

const url = 'https://api.gateio.ws/api/v4/spot/currencies'

async function requestData() {
    //fetch(url)
    const data: any[] = (await axios.get(url)).data//['data']
    console.log(data[1], data[10], data[100], data[99999]);
    console.log(data.pop());
    
}

async function main() {
    // while (true) {
        
    // }
    
}

(async () => {
    //await requestData()
    /* await  */main()
})()



