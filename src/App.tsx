import React, { useEffect, useState } from "react";
import Card from "./Shared/Card";
import { Service } from "./Services/service";

export interface Drug {
  id: number
  drug_name: string
  brand_name: string
  company: string
  ndc_code: string
  diagnosis_code: string
  diagnosis_desc_short: string
  diagnosis_desc_long: string
  procedure_code: string
  procedure_desc_short: string
  procedure_desc_long: string
  dosage: number
  prescription_date: string
  expiration_date: string
}

const App = () => {
  const service = new Service("http://localhost:3002");
  const [drugs, setDrugs] = useState<Drug[]>([])
  const getData = async () : Drug[] => {
    const data = await service.getDrugs();
    console.log(data.length)
    setDrugs(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white mx-5 my-5 w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-4 ">
      {
          drugs.map( drug => <Card drug={drug} key={drug.id}/>)
      }
    </div>
  );
};

export default App;
