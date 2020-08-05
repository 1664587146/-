package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichuanxueyuan.controller.CommonCity;
import com.yichunxueyuan.entity.CityWeather;
import com.yichunxueyuan.entity.CommomCity;

public class StarCity_Rain_Manager {

	//queryStarCity_Rain()
	public List queryStarCity_Rain(){
		
		List lists = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		lists = new ArrayList();
		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb?useOldAliasMetadataBehavior=true","root","123456");
			
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from bs order by cityname,date");
			
			while(rs.next()){

				CommomCity cc = new CommomCity();
				
				cc.setCity(rs.getString("cityname"));
				cc.setRain(rs.getFloat(" rain"));
				cc.setDate(rs.getString("date"));
				
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
