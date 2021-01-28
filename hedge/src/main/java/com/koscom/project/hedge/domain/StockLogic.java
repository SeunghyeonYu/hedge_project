package com.koscom.project.hedge.domain;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

@Service
public class StockLogic implements StockService {
	
	/*
	 * 기능 : 코스피, 코스닥 주식시세정보 조회
	 * 
	 * @param 
	 * 
	 * 
	 * @return Stock 주식시세정보
	 */
	@Override
	public Stock findStockQuotes() {

		Stock kospi = getKospi();
		Stock kosdoq = getKosdaq();
		
		String result = "[KOSPI] 체결가격(" + kospi.getTrdPrc() + "), 전일대비가격(" + kospi.getCmpprevddPrc() + ")	||	[KOSDAQ] 체결가격(" + kosdoq.getTrdPrc() + "), 전일대비가격(" + kosdoq.getCmpprevddPrc() + ")";
		Stock resultStock = new Stock();
		resultStock.setResult(result);
		
		return resultStock;
	}
	
	/*
	 * 기능 : 코스피 주식시세정보 조회
	 * 
	 * @param 
	 * 
	 * 
	 * @return Stock 주식시세정보
	 */
	public Stock getKospi() {
		
		Stock stock = new Stock();
		
		try {
			StringBuilder urlBuilder = new StringBuilder("https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/index".replace("{marketcode}", URLEncoder.encode("kospi", "UTF-8")));
			urlBuilder.append("?");
			urlBuilder.append(URLEncoder.encode("apikey", "UTF-8") + "=" + URLEncoder.encode("l7xx622c3bcb1b6d4cababa4b83a514d148e", "UTF-8"));
			URL url = new URL(urlBuilder.toString());
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			System.out.println("Response code: " + conn.getResponseCode());
			
			BufferedReader rd;
			if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
				rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			} else {
				rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
			}
			
			StringBuilder sb = new StringBuilder();
			String line;
			while ((line = rd.readLine()) != null) {
				sb.append(line);
			}
			rd.close();
			conn.disconnect();
			
			// JSON parser 만들어 문자열 데이터를 객체화한다.
            JSONParser parser = new JSONParser();
            JSONObject obj = (JSONObject)parser.parse(sb.toString());
            JSONObject result = (JSONObject) obj.get("result");
            
			stock.setTrdPrc((Double) result.get("trdPrc"));
			stock.setCmpprevddPrc((Double) result.get("cmpprevddPrc"));
			stock.setCmpprevddTpCd((String) result.get("cmpprevddTpCd"));
			
		} catch (Exception e) {
			System.out.println(e);
		}

		return stock;
	}
	
	
	/*
	 * 기능 : 코스닥 주식시세정보 조회
	 * 
	 * @param 
	 * 
	 * 
	 * @return Stock 주식시세정보
	 */
	public Stock getKosdaq() {
		
		Stock stock = new Stock();
		
		try {
			StringBuilder urlBuilder = new StringBuilder("https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/index".replace("{marketcode}", URLEncoder.encode("kosdaq", "UTF-8")));
	        urlBuilder.append("?");
	        urlBuilder.append(URLEncoder.encode("apikey","UTF-8") + "=" + URLEncoder.encode("l7xx622c3bcb1b6d4cababa4b83a514d148e", "UTF-8"));
	        URL url = new URL(urlBuilder.toString());
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");
	        
			BufferedReader rd;
			if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
				rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			} else {
				rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
			}
			
			StringBuilder sb = new StringBuilder();
			String line;
			while ((line = rd.readLine()) != null) {
				sb.append(line);
			}
			rd.close();
			conn.disconnect();
			
			// JSON parser 만들어 문자열 데이터를 객체화한다.
            JSONParser parser = new JSONParser();
            JSONObject obj = (JSONObject)parser.parse(sb.toString());
            JSONObject result = (JSONObject) obj.get("result");
            
			stock.setTrdPrc((Double) result.get("trdPrc"));
			stock.setCmpprevddPrc((Double) result.get("cmpprevddPrc"));
			stock.setCmpprevddTpCd((String) result.get("cmpprevddTpCd"));
			
		} catch (Exception e) {
			System.out.println(e);
		}

		return stock;
	}
}