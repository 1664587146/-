package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichunxueyuan.entity.CityWeather;
import com.yichunxueyuan.entity.CommomCity;

public class City_quality_Manager {
	
			//queryAllCity_quality()
			public List queryAllCity_quality(){
				
				List lists = null;
				Connection conn = null;
				Statement stmt = null;
				ResultSet rs = null;
				lists = new ArrayList();
				try {
					Class.forName("com.mysql.jdbc.Driver");
				
					conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb","root","123456");
					
					stmt = conn.createStatement();
					rs = stmt.executeQuery("SELECT * from quality ");
					
					while(rs.next()){
						
						CityWeather cw = new CityWeather();
						
						cw.setQuality(rs.getString("quality"));
						cw.setNumber(rs.getInt("number"));
							
						lists.add(cw);

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
