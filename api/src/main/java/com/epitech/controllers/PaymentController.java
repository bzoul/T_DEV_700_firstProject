package com.epitech.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epitech.exception.ResourceNotFoundException;
import com.epitech.models.Payment;
import com.epitech.repository.PaymentRepository;

@RestController
@RequestMapping("/apiCashManager")
public class PaymentController {
	
	@Autowired
	private PaymentRepository paymentRepository;

	@GetMapping("/payments")
	public List<Payment> getAllPayments() {
		return paymentRepository.findAll();
	}

	@GetMapping("/payments/{id}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable(value = "id") Long paymentId)
			throws ResourceNotFoundException {
		Payment payment = paymentRepository.findById(paymentId)
				.orElseThrow(() -> new ResourceNotFoundException("Payment not found for this id :: " + paymentId));
		return ResponseEntity.ok().body(payment);
	}

	@PostMapping("/payments")
	public Payment createPayment(@Valid @RequestBody Payment payment) {
		return paymentRepository.save(payment);
	}

	@PutMapping("/payments/{id}")
	public ResponseEntity<Payment> updatePayment(@PathVariable(value = "id") Long paymentId,
			@Valid @RequestBody Payment paymentDetails) throws ResourceNotFoundException {
		Payment payment = paymentRepository.findById(paymentId)
				.orElseThrow(() -> new ResourceNotFoundException("Payment not found for this id :: " + paymentId));

		payment.setStatus(paymentDetails.getStatus());
		payment.setMethod(paymentDetails.getMethod());
		payment.setTotal(paymentDetails.getTotal());
		payment.setCart(paymentDetails.getCart());
		payment.setNumcb(paymentDetails.getNumcb());
		payment.setExpiration(paymentDetails.getExpiration());
		payment.setCvv(paymentDetails.getCvv());
		payment.setUserId(paymentDetails.getUserId());

		final Payment updatedPayment = paymentRepository.save(payment);
		return ResponseEntity.ok(updatedPayment);
	}

	@DeleteMapping("/payments/{id}")
	public Map<String, Boolean> deletePayment(@PathVariable(value = "id") Long paymentId)
			throws ResourceNotFoundException {
		Payment payment = paymentRepository.findById(paymentId)
				.orElseThrow(() -> new ResourceNotFoundException("Payment not found for this id :: " + paymentId));

		paymentRepository.delete(payment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
