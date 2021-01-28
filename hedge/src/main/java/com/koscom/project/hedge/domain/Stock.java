package com.koscom.project.hedge.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Stock {

	private double trdPrc;				// 체결가격
	private String cmpprevddTpCd;		// 전일대비구분코드
	private double cmpprevddPrc;		// 전일대비가격
	private String result;
	
	Stock() {}

	public double getTrdPrc() {
		return this.trdPrc;
	}
	
	public String getCmpprevddTpCd() {
		return this.cmpprevddTpCd;
	}
	
	public double getCmpprevddPrc() {
		return this.cmpprevddPrc;
	}
	
	public String getResult() {
		return this.result;
	}
	
	public void setTrdPrc(double trdPrc) {
		this.trdPrc = trdPrc;
	}
	
	public void setCmpprevddTpCd(String cmpprevddTpCd) {
		this.cmpprevddTpCd = cmpprevddTpCd;
	}
	
	public void setCmpprevddPrc(double cmpprevddPrc) {
		this.cmpprevddPrc = cmpprevddPrc;
	}
	
	public void setResult(String result) {
		this.result = result;
	}
}