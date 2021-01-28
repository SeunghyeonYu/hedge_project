
package com.koscom.project.hedge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koscom.project.hedge.domain.Stock;
import com.koscom.project.hedge.domain.StockLogic;

@RestController
@CrossOrigin("*")
class StockController {

	@Autowired
	private StockLogic logic;

	StockController() {
	}

	/*
	 * 기능 : 코스피와 코스닥 주식시세 정보 조회  
	 * 
	 * @param 
	 * 
	 * @return Stock 
	 */
	@PostMapping("/stock/quotes")
	Stock findStockQuotes() {
		return logic.findStockQuotes();
	}	
}