export type Obj ={
  id:number;
  name:string;
  coordinate?: any;
  coordinates?: any;
  type: number,
  status: boolean
}


export class Documents {
  DocumentId: number;
  Description: string;
  PageNumber: number;
  DocumentRefNo: string;
  DocumentNumber: number;
  DocumentType: string;
  OwnerName: string;
  EnteredBy: number;
  file: any;
}

export class Weather {
  date: Date
  temperatureC: number
  temperatureF: number
  summary: string
}
