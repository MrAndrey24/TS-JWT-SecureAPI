export interface Payload {
    _id: string;
    iat: number;
    exp: number;
}

export declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

export enum Status {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Completed = 'Completed'
}