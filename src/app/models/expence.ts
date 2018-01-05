export interface Expance {
    $key?: string;
    type: string;
    description: string;
    amount: number;
    stDate: Date;
    endDate: Date;
    isPaid: boolean;
}
