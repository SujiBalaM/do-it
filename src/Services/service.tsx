export class Service {
  baseUrl: string;
  constructor(url: string){
    this.baseUrl = url
  }

  getDrugs = async (): Promise<any> => {
    const res = await fetch(`${this.baseUrl}/drugs?_start=0&_limit=100`, {

    })
    const data = await res.json()
    return data;
  }
}
