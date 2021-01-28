
package com.koscom.project.hedge.domain;

public interface StockService {
	
	/*
	 * 기능 : 코스피와 코스닥 주식시세 정보 조회  
	 * 
	 * @param 
	 * 
	 * @return Stock 
	 */
	Stock findStockQuotes();
}
