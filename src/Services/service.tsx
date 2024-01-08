
// export class Service {
    export const getDrugs = async () => {
        const response = await fetch ("json/db.json/drugs");
        const convertedResponse = await response.json();
        return convertedResponse;
    }
// }
// const singelton = new Service();
// export default singelton;