package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.modal.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceDao extends JpaRepository<Invoice,Long> {

}
