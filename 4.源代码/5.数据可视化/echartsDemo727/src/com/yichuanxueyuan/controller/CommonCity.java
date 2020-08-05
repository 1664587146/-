package com.yichuanxueyuan.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.yichunxueyuan.manager.CommonCityManager;
import com.yichunxueyuan.manager.SalesManager;

public class CommonCity extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public CommonCity() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
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

		CommonCityManager cm =new  CommonCityManager();
		  
		  List lists = cm.queryAllCommomCity();
		  
		  Gson gson = new Gson();

		  String gmvs = gson.toJson(lists);
		  
		  System.out.println(gmvs);
		  
		  
		  response.getWriter().print(gmvs);
	}

	
	public void init() throws ServletException {
		// Put your code here
	}

}
