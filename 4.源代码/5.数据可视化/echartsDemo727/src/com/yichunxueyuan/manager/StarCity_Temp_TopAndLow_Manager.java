package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichunxueyuan.entity.CommomCity;

public class StarCity_Temp_TopAndLow_Manager {

	//queryStarCity_Temp_TopAndLow()
	public List queryStarCity_Temp_TopAndLow(){
		
		List lists = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		lists = new ArrayList();
		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb","root","123456");
			
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from star_city order by date,cityname");
			
			while(rs.next()){

				CommomCity cc = new CommomCity();
				
				cc.setCity(rs.getString("cityname"));
				cc.setDate(rs.getString("date"));
				cc.setTemphigh(rs.getInt("temphigh"));
				cc.setTemplow(rs.getInt("templow"));
				
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
