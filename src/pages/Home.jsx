import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import PushIt from "../components/PushIt";
import Button from "@mui/material/Button";
import Invoice from "../components/Invoices";
import { getAllInvoice ,deleteInvoice} from "../service/api"; 

const Home = ()=> {
    const [pushIt, setPushIt] = useState(false);
    const [invoices,setInvoices]=useState([]);

    useEffect(()=>{
const getData =async ()=>{
    const data=await getAllInvoice();
    setInvoices(data);
}
getData();
    },[])
    const toggleInvoice = () => {
        setPushIt(true);
    };
const removeInvoice = async (id) => {
 
  await deleteInvoice(id);

  const updatedInvoices = invoices.filter(invoice => invoice.id != id);
  setInvoices(updatedInvoices);
};

    return (
        <>
            <Header />
            <div>
                <h1 style={{ padding: "10px" }}>Pending Invoices</h1>
             { !pushIt &&  <Button
                    variant="contained"
                    style={{ paddingLeft: "20px" } }
                    onClick={toggleInvoice} 
                >
                    Add Invoice1
                </Button>
}
                {pushIt && <PushIt setPushIt={setPushIt}/>}
    <div>
  <Invoice invoices={invoices} removeInvoice={removeInvoice} />
</div>
       

            </div>
        </>
    );
}

export default Home;