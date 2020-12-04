package com.epitech.exception;

import java.util.Date;

public class DetailsOfErrors {
	
	private Date time;
	private String msg;
	private String details;

	public DetailsOfErrors(Date time, String msg, String details) {
		super();
		this.time = time;
		this.msg = msg;
		this.details = details;
	}

	public Date getTimestamp() {
		return time;
	}

	public String getMessage() {
		return msg;
	}

	public String getDetails() {
		return details;
	}

	@Override
	public String toString() {
		return "DetailsOfErrors [time=" + time + ", msg=" + msg + ", details=" + details + "]";
	}
}