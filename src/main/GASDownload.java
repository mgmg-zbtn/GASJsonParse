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
/**
 * Google Drive API は面倒なのでブラウザでjsonダウンロードまでは手動
 * ダウンロードしたファイルをもとに、ディレクトリを作ってGASプロジェクトを再構成する感じ
 * 
 * 自動化したかったけどかかる労力に見合わない
 * GAS自体スプレッドシートと紐づけてしか動かさないし動かせない
 * 元々作ったものをgithubにまとめるためにやってたやつ
 * 
 * 
 * ID = "ur google app script project id";
 * https://script.google.com/feeds/download/export?id=" + ID + "&format=json
 * json file download and set root directory
 * 
 * @since 2022/07/12
 *
 */
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
