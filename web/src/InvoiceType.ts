export type InvoceStatus = 'paid' | 'pending';

export interface Invoice {
    id: number;
    amount: number;
    status: InvoceStatus;
    issueDate: string;
    dueDate: string;
    customer: {
        id: number;
        name: string;
        email: string;
    }
}

