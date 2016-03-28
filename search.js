/**
 * Created by dinhlv on 3/25/16.
 */
//path xu ly duong lien ket file
//fs xu ly file
//  __dirname : file hien hanh chay nodejs
//var filePath = path.join(__dirname,'fs.js');
//lay dc thogn tin thu muc chua file path.dirname()
//lay thong tin ten cua file path.basename()
//lay thong tin ten cua file ma bo phan mo rong dang sau
// path.basename(filePath, '.js')
//lay thong tin phan mo rong dah sau: path.extname()
//chuyen doi giua cac folde : path.resolve(filePath,'..','views')
//== cd filePath,, cd .. , cd views
// path.join(__dirname, 'fs.js'): noi file path: /fs.js
//node search.js index.html /Users/dinhlv/Desktop/dinhlvtlu.github.io/Position

var fs =require('fs');
var path = require('path');

var processData = process.argv;
var fileSearch = processData[2];
var dirname = processData[3];
//console.log(fileSearch + '\n' +dirname);
var Fs = require('./libFunction.js');
//lib.read(__dirname,fileSearch);
// 1  = read()
if (dirname == 'unidentified')
{
    Fs.checkFile(__dirname,fileSearch);
}
else
{
//node search.js index.html /Users/dinhlv/Desktop/dinhlvtlu.github.io/Position
    path.parse(dirname);
    //path.resolve(dirname);
    Fs.checkFile(dirname,fileSearch);
    console.log(__dirname)
}
//console.log(path.basename('/Users/dinhlv/WebstormProjects/searchFile/libFunction.js'));
