package main;

import java.util.List;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class GSDat {
	
	@SerializedName("files")
	@Expose
	public List<GSFile> files;

}
