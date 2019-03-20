function solution(S) {
    var sArray = S.split(/\r\n|\r|\n/);
    var filesListProp = {"music":0, "images":0, "movies":0, "other":0};
  
    for(var i=0; i<sArray.length;i++){
        var file = sArray[i].split(" ");
        var fileName = file[0];
        var fileType = fileName.substr(fileName.lastIndexOf(".")+1, fileName.length);
        var fileSize = file[1].replace("b", "");
        
        switch(fileType){
            case "mp3":
            case "aac":
            case "flac":
              filesListProp["music"]+=parseInt(fileSize);
              break;
            case "jpg":
            case "bmp":
            case "gif":
              filesListProp["images"]+=parseInt(fileSize);
              break;
            case "mp4":
            case "avi":
            case "mkv":
              filesListProp["movies"]+=parseInt(fileSize);
              break;
            default:
              filesListProp["other"]+=parseInt(fileSize);
              break;
        }
    }
    
    var result = "";
    for (var key in filesListProp) {
      if (filesListProp.hasOwnProperty(key)) {
        result += key + " " + filesListProp[key]+"b\n";
      }
    }
    return result;
}
   
