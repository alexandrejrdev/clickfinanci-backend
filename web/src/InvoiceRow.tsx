import { Invoice } from "./InvoiceType.ts";

interface InvoiceRowPops {
    data: Invoice;
}

// desestruturação do InvoiceRowPops 
export default function InvoiceRow({data}:InvoiceRowPops){

    const { customer, amount, issueDate, dueDate, status } = data;

    return <tr>
        <td>{customer.name}</td>
        <td>{amount} </td>
        <td>{issueDate} </td>
        <td>{dueDate} </td>
        <td>{status}</td>
    </tr>;
}



/* export default function InvoiceRow(props:InvoiceRowPops){
    return <tr>
        <td>{props.data.customer.name}</td>
        <td>{props.data.amount} </td>
        <td>{props.data.issueDate} </td>
        <td>{props.data.dueDate} </td>
        <td>{props.data.status}</td>
    </tr>;
} */