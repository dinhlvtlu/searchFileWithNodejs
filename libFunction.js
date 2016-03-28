/**
 * Created by dinhlv on 3/25/16.
 */
var fs =require('fs');
var path = require('path');
//
//var Fs = function (){};
//Fs.read = function (dirname,fileSearch) {
//
//    fs.stat(dirname, function (err,stats) {
//        if(stats.isDirectory())
//        {
//            fs.readdir(dirname, function(err, listFiles){
//                console.log(listFiles);
//                for(var i = 0 ; i < listFiles.length; i++)
//                {
//                    var dirname = path.join(__dirname,listFiles[i]);
//                    read(dirname,fileSearch);
//                }
//
//            })
//        }
//        if(stats.isFile())
//        {
//            var fileName = path.basename();
//            if(fileName == fileSearch)
//            {
//                console.log(dirname);
//                return dirname;
//            }
//            else
//            {
//                var strEnd = "Khong tim thay file";
//                console.log(strEnd);
//                return strEnd;
//            }
//
//        }
//    });
//};
//                 1 ------
//read = function()
//{
//    console.log("asdf")
//}
// --------2
//module.exports =  function(){
//    console.log("sadf")
//}
//-------3
var buz = function(){};
buz.prototype.checkFile = function(dirname,fileSearch)
{
    var fileCurr = dirname;
    fs.stat(dirname, function (err,stats)
    {
        if(err)
        {
            return;
        }
        else
        {
            if (stats.isDirectory()) {
                //console.log(dirname)
                //console.log("Thu muc")

                fs.readdir(dirname, function (err, listFiles) {
                    //console.log(listFiles);
                    for (var i = 0; i < listFiles.length; i++) {
                        var dirname = path.join(fileCurr, listFiles[i]);
                        buz.prototype.checkFile(dirname, fileSearch);
                    }
                })
            }
            if (stats.isFile()) {
                //
                var fileName = path.basename(dirname);
                //console.log(fileName)
                if(fileName == fileSearch)
                {
                    console.log("Aaaaa....Đây rồi: ")
                    console.log(dirname)
                }


            }
        }

    })
};
module.exports = new buz();
