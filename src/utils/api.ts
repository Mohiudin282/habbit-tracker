const API_URL = process.env.REACT_APP_API_URL;

type Head = {
    [key: string]: string;
}


export class api {
    static async get(url: string): Promise<any>{
        const ID = localStorage.getItem("ID");
        if(!ID) return;
        try {
            const response = await fetch(API_URL + url, {
                headers: {
                    Authorization: ID,
                    "Content-Type": "application/json",
                }
            });

            const data = response.json();
            
            if(!response.ok){
                throw new Error(`Resquest Error: ${response.status}`);
            }

            return data;

        } catch (error: Error | any) {
            console.error(error.message);
        }
    }

    static async post(url: string, body: object | FormData = {}): Promise<any>{
        const ID = localStorage.getItem("ID");
        if(!ID) return;
        const isForm = body instanceof FormData;
        let headers: Head = {
            Authorization: ID,
        }
        if(!isForm){
            headers["Content-Type"] = "application/json"
        }

        try {
            const response = await fetch(API_URL + url, {
                method: "POST",
                headers: headers,
                body: isForm? body: JSON.stringify(body),
            });

            const data = response.json();

            if(!response.ok){
                throw new Error(`Resquest Error: ${response.status}`);
            }

            return data;
            
        } catch (error: Error | any) {
            console.error(error.message);
        }
    }
}
