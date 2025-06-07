package com.invoiceprocessing.server.service;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.modal.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService{

@Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addinvoice(Invoice invoice) {
        return invoiceDao.save(invoice);

    }

    @Override
    public List<Invoice> getAll() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deletebyId(Long id) {
      Invoice ans= invoiceDao.findById(id).get();
      invoiceDao.deleteById(id);
      return ans;
    }
}
