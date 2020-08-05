package com.yichuanxueyuan.controller;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yichunxueyuan.manager.*;

import com.google.gson.Gson;

public class Map_Servlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);

	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");  //这里是为了解决前后端传送数据乱码
		
		
		Map_Manager us = new Map_Manager();
		
		List lists = us.queryAllMaps();
		
		Gson gson = new Gson();
		
		String names = gson.toJson(lists);
		
		System.out.println(names);
				
		response.getWriter().print(names);
	
	}

}
