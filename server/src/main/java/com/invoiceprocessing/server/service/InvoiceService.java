package com.invoiceprocessing.server.service;

import com.invoiceprocessing.server.modal.Invoice;
import org.springframework.stereotype.Service;

import java.util.List;


public interface InvoiceService {

    public Invoice addinvoice(Invoice invoice);

    public Invoice deletebyId(Long id);

    public List<Invoice> getAll();

}
