export interface Excersise{
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date;
    state?: 'Completed' | 'Canceled' | null;

}