// Mocking means we does not hit action fetch data from backend, we create a custome function it is mocking 

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data:string = "Data fetching";
        if(data){
            resolve(data);
        } else {
            reject(new Error("Fail to fetch data from backend"))
        }
    })
}

const getPromiseData1 = async (): Promise<void> => {
    const d = await makePromise();
    console.log(d)
}
const getPromiseData2 = async (): Promise<string> => {
    const d = await makePromise();
    return d;
}

// object

type objectData = {
    name: string;
    jobId: number
}

const makePromiseObject = (): Promise<objectData> => {
    return new Promise<objectData>((resolve, reject) => {
        const data:objectData = {name: 'hello', jobId: 1};

        if(data){
            resolve(data)
        } else {
            reject(new Error("Invalid Type"))
        }
    })
}

const getPromiseValue = async (): Promise<objectData> => {
    const d = await makePromiseObject()
    return d;
}



type jsonFormet = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const getJsonData = async (): Promise<jsonFormet> => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    return (await response).json()
}

const displayData = async ():Promise<void> => {
    const result =  await getJsonData();
    console.log(result)
}
displayData();