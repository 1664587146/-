package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichunxueyuan.entity.CommomCity;

public class CommonCity_temp_top_Manager {
		
		//queryAllCommomCity_temp_top()
		public List queryAllCommomCity_temp_top(){
			
			List lists = null;
			Connection conn = null;
			Statement stmt = null;
			ResultSet rs = null;
			lists = new ArrayList();
			try {
				Class.forName("com.mysql.jdbc.Driver");
			
				conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb","root","123456");
				
				stmt = conn.createStatement();
				rs = stmt.executeQuery("SELECT * from temphigh ORDER BY temphigh desc LIMIT 7");//order by ???
				
				while(rs.next()){
					
					CommomCity cc = new CommomCity();
					
					cc.setCity(rs.getString("cityname"));
					cc.setTemphigh(rs.getInt("temphigh"));
						
					lists.add(cc);

				}

				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				/*
				try {
					rs.close();
				
					stmt.close();
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				*/
			}
			
			return lists;
			
		}

}
