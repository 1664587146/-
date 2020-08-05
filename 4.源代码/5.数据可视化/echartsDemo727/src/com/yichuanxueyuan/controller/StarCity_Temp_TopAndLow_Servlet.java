package com.yichuanxueyuan.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.yichunxueyuan.manager.StarCity_Temp_TopAndLow_Manager;
import com.yichunxueyuan.manager.StartCity_Weather_Manager;

public class StarCity_Temp_TopAndLow_Servlet extends HttpServlet {


	public StarCity_Temp_TopAndLow_Servlet() {
		super();
	}

	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");  
		
		StarCity_Temp_TopAndLow_Manager scttalm =new  StarCity_Temp_TopAndLow_Manager();//ÐÞ¸Ä
	  
		List lists = scttalm.queryStarCity_Temp_TopAndLow();//ÐÞ¸Ä
	  
		Gson gson = new Gson();
	
		String gmvs = gson.toJson(lists);
	  
		System.out.println("StarCity_Temp_TopAndLow");
		System.out.println(gmvs);
	  
		response.getWriter().print(gmvs);
	}


	public void init() throws ServletException {
		// Put your code here
	}

}
