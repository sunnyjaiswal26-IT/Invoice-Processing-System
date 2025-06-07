 import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
  import Table from '@mui/material/Table';
import Button from "@mui/material/Button";
  
  const Invoice =  ({invoices,removeInvoice}) => {
    
    return(
      <>
      <p></p>
        <Table>
            <TableHead>
                <TableRow style={{ background:'black' }}>
                  <TableCell style={{ fontWeight: 'bold', color:'white'}}>ID</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white'}}>Vender</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white' }}>Product</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white' }}>Price</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white' }}>Date</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white' }}>Action</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color:'white' }}>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
{
    invoices.map(invoice=>(
        <TableRow key={invoice.id}>
          <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.product}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.action}</TableCell>
          
            <TableCell>
                <Button variant="contained" color="success"
                 onClick={()=>removeInvoice(invoice.id)}>Mark Done</Button>
            </TableCell>
        </TableRow>
    ))
}
            </TableBody>
        </Table>
    
      </>
    );
  };
  export default Invoice;