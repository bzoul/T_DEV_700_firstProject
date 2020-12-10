package com.epitech.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="article")
public class Article {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "art_barcode")
    private String barcode;

    @Column(name = "art_name")
    private String name;

    @Column(name = "art_price")
    private BigDecimal price;

    @Column(name = "art_logo")
    private String logo;

    @Column(name = "art_quantity")
    private int quantity;
	
    @Column(name = "art_description")
    private int description;

	public Article() {
		super();
	}

	public Article(long id, String barcode, String name, BigDecimal price, String logo, int quantity, int description) {
		super();
		this.id = id;
		this.barcode = barcode;
		this.name = name;
		this.price = price;
		this.logo = logo;
		this.quantity = quantity;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getDescription() {
		return description;
	}

	public void setDescription(int description) {
		this.description = description;
	}
}
