
export interface IPatientDetail {
    id: string;
    name: string;
    phone: string;
    gender: string;
    location: string;
    address: string;
    availableDrugs?: IDrug[];
    orderedDrugs?: IDrug[];
}

export interface IDrug {
    id: string;
    name: string;
    strength: string;
    refills: number;
    comment?: string;
}

export interface IShippingOrder {
    id: string;
    patientId: string;
    drugs: IDrug[];
}
