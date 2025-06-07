package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.modal.Invoice;
import com.invoiceprocessing.server.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
        try {
            return this.invoiceService.addinvoice(invoice);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices(){
        List<Invoice>ans=invoiceService.getAll();
        return ans ;
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId){
     return this.invoiceService.deletebyId(Long.parseLong(invoiceId));

    }
}
