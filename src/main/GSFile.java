package main;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class GSFile {
	
	@SerializedName("id")
	@Expose
	public String id;

	@SerializedName("name")
	@Expose	
	public String name;
	
	@SerializedName("type")
	@Expose
	public String type;

	@SerializedName("source")
	@Expose
	public String source;

}
