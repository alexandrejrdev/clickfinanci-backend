import InvoiceTable from "./InvoiceTable.tsx";
import { Invoice } from './InvoiceType.ts';

const invoices: Invoice[] = [{
    id: 1,
    amount: 110000,
    status: 'pending',
    issueDate: '2026-10-10',
    dueDate: '2026-11-16',
    customer: {
        id: 10,
        name: 'Barbearia Navalha de Ouro',
        email: 'barbearia@gmail.com',
    }
}, {
    id: 2,
    amount: 120000,
    status: 'pending',
    issueDate: '2026-10-10',
    dueDate: '2026-11-16',
    customer: {
        id: 20,
        name: 'Bodega do Ze',
        email: 'bodegadoze@gmail.com',
    }

}, {
    id: 3,
    amount: 130000,
    status: 'pending',
    issueDate: '2026-10-10',
    dueDate: '2026-11-16',
    customer: {
        id: 30,
        name: 'Padaria da maria',
        email: 'padaria@gmail.com',
    }
}];

export default function App() {
    return <>
        
        <InvoiceTable datas={invoices} />
    </>;
}