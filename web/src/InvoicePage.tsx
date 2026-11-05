import InvoiceTable from './InvoiceTable';
import type { Invoice } from './InvoiceType.ts';

const invoices: Invoice[] = [
    {
        id: 1,
        amount: 110000,
        status: 'pending',
        issueDate: '2026-10-10',
        dueDate: '2026-11-16',
        customer: {
            id: 10,
            name: 'Barbearia Navalha de Ouro',
            email: 'barbearia@gmail.com'
        }
    },
    {
        id: 2,
        amount: 120000,
        status: 'pending',
        issueDate: '2026-10-10',
        dueDate: '2026-11-16',
        customer: {
            id: 20,
            name: 'Bodega do Ze',
            email: 'bodegadoze@gmail.com'
        }
    },
    {
        id: 3,
        amount: 130000,
        status: 'pending',
        issueDate: '2026-10-10',
        dueDate: '2026-11-16',
        customer: {
            id: 30,
            name: 'Padaria da maria',
            email: 'padaria@gmail.com'
        }
    }
];

export default function InvoicePage() {
    return (
        <>
            <h1>Faturas</h1>
            <InvoiceTable datas={invoices} />
        </>
    );
}
