export interface Employee {
    id: number;
    name: string;
    dateOfBirth: Date;
    alias?: string;//optional
    jobCategory?: string; //optional. Eg: technology, social, sciences, doctor 
}

