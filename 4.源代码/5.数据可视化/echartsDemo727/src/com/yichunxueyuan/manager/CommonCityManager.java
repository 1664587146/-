package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichunxueyuan.entity.CommomCity;
import com.yichunxueyuan.entity.GMV;

public class CommonCityManager {
	
	//queryAllCommomCity()

	public List queryAllCommomCity(){
		
		List lists = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		lists = new ArrayList();
		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb","root","123456");
			
			stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * from humidity ORDER BY humidity desc LIMIT 7");//order by ???
			
			while(rs.next()){
				
				CommomCity ccm = new CommomCity();
				
				ccm.setCity(rs.getString("cityname"));
				ccm.setHumidity(rs.getInt("humidity"));
				ccm.setTemphigh(rs.getInt("temphigh"));
				//ccm.setTemphigh(rs.getInt("templow"));
					
				lists.add(ccm);

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
