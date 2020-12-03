package com.epitech.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "pay_status")
	private String status;
	
	@Column(name = "pay_method")
	private String method;	
	
	@Column(name = "pay_total")
	private float total;
	
	@Column(name = "pay_cart")
	private String cart;
	
	@Column(name = "pay_numcb")
	private String numcb;
	
	@Column(name = "pay_expiration")
	private String expiration;
	
	@Column(name = "pay_cvv")
	private int cvv;

	public Payment() {
		super();
	}

	public Payment(long id, String status, String method, float total, String cart, String numcb, String expiration,
			int cvv) {
		super();
		this.id = id;
		this.status = status;
		this.method = method;
		this.total = total;
		this.cart = cart;
		this.numcb = numcb;
		this.expiration = expiration;
		this.cvv = cvv;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public String getCart() {
		return cart;
	}

	public void setCart(String cart) {
		this.cart = cart;
	}

	public String getNumcb() {
		return numcb;
	}

	public void setNumcb(String numcb) {
		this.numcb = numcb;
	}

	public String getExpiration() {
		return expiration;
	}

	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
}
