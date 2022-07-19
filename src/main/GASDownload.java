package main;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;

import com.google.gson.Gson;


public class GASDownload {

	public static void main(String[] args) throws
		IOException,
		MalformedURLException,
		FileNotFoundException {
		
		String target = "totalization.json";
		File preFile = new File(target);
		
		File exportDir = new File("./" + preFile.getName().split("\\.")[0]);
		exportDir.mkdir();
		
		Path targetPath = Paths.get(target);
		String sb = Files.readString(targetPath);
		
		Gson gson = new Gson();
		GSDat dat = gson.fromJson(sb.toString(), GSDat.class);
		
		String extension;
		
		for (GSFile f :dat.files) {
			switch (f.type) {
				case "json"		: extension = ".json"; break;
				case "server_js": extension = ".gs"  ; break;
				default			: extension = ".txt";
			}
			
			File temp = new File(exportDir.toString() + "\\" + f.name + extension);
			temp.createNewFile();
			Path wp = Paths.get(temp.toURI());
			Files.write(wp, f.source.getBytes(), StandardOpenOption.WRITE);
		}
		Files.move(targetPath, Paths.get(exportDir.toString()  + "\\" + target), StandardCopyOption.REPLACE_EXISTING);
	}
}
