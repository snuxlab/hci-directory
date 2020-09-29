/*
created: 2020.09.29
author: minjoon
뻘짓 하다가 따로 js 파일로 빼봤습니다.
*/
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1UulHTD6xEk8KOra6X6kss8JQ7IgqV8wbAZTyhJGf6uU/edit#gid=0';

var listLenth;
var labs;

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {
    // alert('Successfully processed!')
    listLenth = data.length;
    labs = data[0].LabTitle;

    return listLenth, labs;
}

window.addEventListener('DOMContentLoaded', init)