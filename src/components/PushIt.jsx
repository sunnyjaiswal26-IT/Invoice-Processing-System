import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { saveInvoice } from '../service/api';
import Home from '../pages/Home';

const defaultObj = {
  name: '',
  product: '',
  amount: 0,
  date: '',
  action: 'Pending'
};

const PushIt=({setPushIt})=> {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const addInDatabase = async () => {
    if (!invoice.name || !invoice.product || !invoice.date) {
      alert("Please fill all the required fields.");
      return;
    }

    const response = await saveInvoice({
      ...invoice,
      amount: Number(invoice.amount)
    });

    setPushIt(false);
    console.log("Response:", response);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h2>Add Invoice</h2>
      <TextField
        variant="standard"
        placeholder="Enter your name..."
        name="name"
        
        onChange={onValueChange}
         autoComplete="off"
      />

      <TextField
        variant="standard"
        placeholder="Product"
        name="product"
        onChange={onValueChange}
        autoComplete="off"
        style={{ margin: '10px' }}
      />

      <TextField
        variant="standard"
        placeholder="Price in Rs"
        type="number"
        name="amount"
        onChange={onValueChange}
        autoComplete="off"
        style={{ margin: '10px' }}
      />

      <TextField
        variant="standard"
        placeholder="Date"
        type="date"
        name="date"
        
        onChange={onValueChange}
        autoComplete="off"
        style={{ margin: '10px' }}
      />

      <Button variant="contained" onClick={addInDatabase}>
        Add Invoice2
      </Button>
    </div>
  );
}

export default PushIt;