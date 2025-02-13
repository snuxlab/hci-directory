// 기존 코드는 Archive 폴더에 저장
// 2024.11.05 장현수 업데이트

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRb-Mr1V5FMUBKTE4Nb_u6IXsQOQ7n9NTBHF_MEpVPPV5ZZXEsoxgczGfrwu1Xr5IrUG54c7oVbEH3F/pub?gid=0&single=true&output=csv';
// 기존 : https://docs.google.com/spreadsheets/d/1UulHTD6xEk8KOra6X6kss8JQ7IgqV8wbAZTyhJGf6uU/edit#gid=0
let labdata;
let listLength;

function init() {
    Papa.parse(publicSpreadsheetUrl, {
    download: true,
    header: true,
    complete: function(results) {
      labdata = results.data
    //   console.log(labdata);
    }
  })
}
window.addEventListener('DOMContentLoaded', init)

var Stags = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']; // 사용자가 선택한 태그의 명칭을 저장하는 변수
var CharUniv = ''; // 사용자가 검색한 대학교명을 저장하는 변수
var CharProf = ''; // 사용자가 검색한 교수명을 저장하는 변수
var CharLab = ''; // 사용자가 검색한 연구실명을 저장하는 변수
var CountLabs = 0; // 검색된 연구실의 갯수를 저장하는 변수
var excepUniv = ''; // 예외처리된 대학교명을 저장하는 변수


/*1. 태그로 검색한 경우*/
function tagSearchList() {
    // console.log(listLength);
    listLength = labdata.length;
    //태그로 검색할 경우 검색어로 검색어를 무력화시키기 위해 초기화 진행
    CharLab = '';
    CharProf = '';
    CharUniv = '';
    $('#myInput').val('');

    //검색 후 화면에 표시할 연구실의 html값을 저장하는 변수생성
    var tagList = '';

    //사용자가 선택한 키워드를 Stags배열에 저장 (1일 경우 선택, 0일 경우 선택x)
    for (var i = 0; i < isAct_tag.length; i++) {
        if (isAct_tag[i] == 1) {
            Stags[i] = '#' + tag_text[i];
        } else if (isAct_tag[i] == 0) {
            Stags[i] = '#';
        }
    }

    //검색된 연구실 갯수를 세기 위한 변수 초기화
    CountLabs = 0;
// <<<<<<< HEAD

    //GPT code
// =======
    
    //GPT Code
// >>>>>>> b387166ed2daaee69075b86b0b46e075a58ff582
    for (var j = 0; j < listLength; j++) {
        var keyword = labdata[j].Keyword_1;
        var addToTagList = false; // 기본값: 추가하지 않음
    
        // 사용자가 아무 태그도 검색하지 않았을 경우
        if (Stags.every(tag => tag === '#') && CharUniv === '' && CharProf === '' && CharLab === '') {
            addToTagList = true; // 모든 연구실을 추가
        } else {
            // 모든 태그가 키워드에 포함되어 있을 경우에만 추가
            if (Stags.every((tag, index) => keyword.indexOf(Stags[index]) >= 0)) {
                addToTagList = true;
            }
        }
    
        // 조건에 맞는 연구실만 추가
        if (addToTagList) {
            tagList += '<a onclick="I(' + labdata[j].LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + labdata[j].LabTitle + '</div> <div class="card_prof">' + labdata[j].Prof + ' 교수&ensp;</div><div class="card_univ">' + labdata[j].Univ + ' ' + labdata[j].Major + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" vie|wBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + labdata[j].Keyword_1 + '</div><br></div></div></article></a>';
            CountLabs++;
        }
        
    }

    //tagList변수에 저장한 html코드를 뿌려서 동적목록구성
    $('#DropInListArea').html(tagList);

    //검색한 연구실 갯수 뿌리기
    if (CountLabs == 0) {
        $('#howManyLabs').html('검색 결과가 없습니다.');
    } else {
        $('#howManyLabs').html('검색 결과 &#40;' + CountLabs + '&#41;');
    }
}

/*1. 태그로 검색한 경우 끝*/


/*2. 검색어로 검색한 경우*/
function charSearchList() {
    var tagList = '';
    //사용자가 검색한 검색어가 대학교명인지 교수명인지 연구실명인지 구분.
    if (filter_kind == 0) {
        CharUniv = $('#myInput').val(); // 사용자가 검색한 대학교 명 대입.
        CharProf = '';
        CharLab = '';
    } else if (filter_kind == 1) {
        CharProf = $('#myInput').val(); // 사용자가 검색한 교수명을 대입.
        CharUniv = '';
        CharLab = '';
    } else if (filter_kind == 2) {
        CharLab = $('#myInput').val(); // 사용자가 검색한 연구실명을 대입.
        CharProf = '';
        CharUniv = '';
    } else {
        console.log('검색어 입력 오류...');
    }

    //태그 초기화
    Stags[0] = '#';
    Stags[1] = '#';
    Stags[2] = '#';
    Stags[3] = '#';
    Stags[4] = '#';
    Stags[5] = '#';
    Stags[6] = '#';
    Stags[7] = '#';
    Stags[8] = '#';
    Stags[9] = '#';
    Stags[10] = '#';
    Stags[11] = '#';
    Stags[12] = '#';
    Stags[13] = '#';
    Stags[14] = '#';
    Stags[15] = '#';
    Stags[16] = '#';
    Stags[17] = '#';
    Stags[18] = '#';
    Stags[19] = '#';
    Stags[20] = '#';
    Stags[21] = '#';
    Stags[22] = '#';
    Stags[23] = '#';
    Stags[24] = '#';
    Stags[25] = '#';
    isAct_tag[0] = 0;
    isAct_tag[1] = 0;
    isAct_tag[2] = 0;
    isAct_tag[3] = 0;
    isAct_tag[4] = 0;
    isAct_tag[5] = 0;
    isAct_tag[6] = 0;
    isAct_tag[7] = 0;
    isAct_tag[8] = 0;
    isAct_tag[9] = 0;
    isAct_tag[10] = 0;
    isAct_tag[11] = 0;
    isAct_tag[12] = 0;
    isAct_tag[13] = 0;
    isAct_tag[14] = 0;
    isAct_tag[15] = 0;
    isAct_tag[16] = 0;
    isAct_tag[17] = 0;
    isAct_tag[18] = 0;
    isAct_tag[19] = 0;
    isAct_tag[20] = 0;
    isAct_tag[21] = 0;
    isAct_tag[22] = 0;
    isAct_tag[23] = 0;
    isAct_tag[24] = 0;
    isAct_tag[25] = 0;
    $('.tag').remove();
    $('.navbar-item').css("color", "#0A0A0A");



   
    //대학명으로 검색
    //검색어 예외처리
    if (filter_kind == 0 && CharUniv !== '') {
        switch (CharUniv) {
            case '한경대학교':
                CharUniv = '국립한경대학교';
                break;
            case '과기대':
                CharUniv = '강원대학교';
                break;
            case '시립대':
                CharUniv = '서울시립대학교';
                break;
            case '교통대':
                CharUniv = '한국교통대학교';
                break;
            case '산기대':
                CharUniv = '한국산업기술대학교교';
                break;
            case '광주과기원':
            case 'GIST':
            case 'gist':
            case '광주과학기술원':
            case '지스트':
                CharUniv = 'GIST(광주과학기술원)';
                break;
            case '한국과학기술원':
            case 'KAIST':
            case 'kaist':
            case '카이스트':
                CharUniv = 'KAIST(한국과학기술원)';
                break;
            case '서울미디어대학원대학교':
            case 'SMIT':
            case 'smit':
                CharUniv = 'SMIT(서울미디어대학원대학교)';
                break;
            case '울산과학기술원':
            case 'UNIST':
            case 'unist':
            case '유니스트':
                CharUniv = 'UNIST(울산과학기술원)';
                break;
            default:
                break;
        }
        CountLabs = 0;
        for (var a = 0; a < listLength; a++) {
            // var checkNumA = eval('list' + a);

            if (CharUniv == labdata[a].Univ) {
                tagList += '<a onclick="I(' + labdata[a].LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + labdata[a].LabTitle + '</div><div class="card_prof">' + labdata[a].Prof + ' 교수&ensp;</div><div class="card_univ">' + labdata[a].Univ + ' ' + labdata[a].Major + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + labdata[a].Keyword_1 + '</div><br></div></div></article></a>';
                CountLabs++;
            }
        }
        $('#DropInListArea').html(tagList);
        if (CountLabs == 0) {
            $('#howManyLabs').html('검색 결과가 없습니다.');

        } else {
            $('#howManyLabs').html('검색 결과 &#40;' + CountLabs + '&#41;');

        }
    }
    //교수명으로 검색
    else if (filter_kind == 1 && CharProf !== '') {
        CountLabs = 0;
        for (var b = 0; b < listLength; b++) {
            // var checkNumB = eval('list' + b);

            if (CharProf == labdata[b].Prof) {
                tagList += '<a onclick="I(' + labdata[b].LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + labdata[b].LabTitle + '</div><div class="card_prof">' + labdata[b].Prof + ' 교수&ensp;</div><div class="card_univ">' + labdata[b].Univ + ' ' + labdata[b].Major + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + labdata[b].Keyword_1 + '</div><br></div></div></article></a>';
                CountLabs++;
            }
        }
        $('#DropInListArea').html(tagList);
        if (CountLabs == 0) {
            $('#howManyLabs').html('검색 결과가 없습니다.');

        } else {
            $('#howManyLabs').html('검색 결과 &#40;' + CountLabs + '&#41;');

        }
    }
    //연구실명으로 검색
    else if (filter_kind == 2 && CharLab !== '') {
        CountLabs = 0;
        for (var c = 0; c < listLength; c++) {
            // var checkNumC = eval('list' + c);
            var checkA = labdata[c].LabTitle.toLowerCase();
            var checkB = CharLab.toLowerCase();

            if (checkA.indexOf(checkB) !== -1) {
                tagList += '<a onclick="I(' + labdata[c].LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + labdata[c].LabTitle + '</div><div class="card_prof">' + labdata[c].Prof + ' 교수&ensp;</div><div class="card_univ">' + labdata[c].Univ + ' ' + labdata[c].Major + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + labdata[c].Keyword_1 + '</div><br></div></div></article></a>';
                CountLabs++;
            }
        }
        $('#DropInListArea').html(tagList);
        if (CountLabs == 0) {
            $('#howManyLabs').html('검색 결과가 없습니다.');

        } else {
            $('#howManyLabs').html('검색 결과 &#40;' + CountLabs + '&#41;');

        }
    }

    //태그도 선택하지 않고 검색어도 입력하지 않은 경우
    if (Stags[0] === '#' && Stags[1] === '#' && Stags[2] === '#' && Stags[3] === '#' && Stags[4] === '#' && Stags[5] === '#' && Stags[6] === '#' && Stags[7] === '#' && Stags[8] === '#' && Stags[9] === '#' && Stags[10] === '#' && Stags[11] === '#' && Stags[12] === '#' && Stags[13] === '#' && Stags[14] === '#' && Stags[15] === '#' && Stags[16] === '#' && Stags[17] === '#' && Stags[18] === '#' && Stags[19] === '#' && Stags[20] === '#' && Stags[21] === '#' && Stags[22] === '#' && Stags[23] === '#' && Stags[24] === '#' && Stags[25] === '#' && CharUniv === '' && CharProf === '' && CharLab === '') {
        CountLabs = 0;
        for (var i = 0; i < listLength; i++) {
            // var checkNum = eval('list' + i);

            tagList += '<a onclick="I(' + labdata[i].LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + labdata[i].LabTitle + '</div><div class="card_prof">' + labdata[i].Prof + ' 교수&ensp;|&ensp;' + labdata[i].Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + labdata[i].Keyword_1 + '</div><br><div></div></article></a>';
            CountLabs++;

        }
        $('#DropInListArea').html(tagList);
        $('#howManyLabs').html('전체 연구실 &#40;' + CountLabs + '&#41;');
    }
}

/*2. 검색어로 검색한 경우 끝*/




//연구실 카드를 클릭 했을 때 팝업에 연구실 정보를 뿌리는 함수
function I(index) {
  $("#myModal").modal('show');

  // 기존 코드 유지
  $('#detail_LabTitle').html(labdata[index-1].LabTitleFull);
  $('#detail_Univ').html(labdata[index-1].Univ);
  $('#detail_Prof').html(labdata[index-1].Prof);
  $('#detail_Major').html(labdata[index-1].Major);
  $('#detail_Email').html(labdata[index-1].Email);
  $('#detail_Keyword_1').html(labdata[index-1].Keyword_1);
  $('#detail_Paper').html(labdata[index-1].Paper);
  $('#detail_URL').html(labdata[index - 1].URL);
  $('#detail_Keyword_a').html(labdata[index-1].Keyword_a);
  $('#detail_Keyword_b').html(labdata[index-1].Keyword_b);
  $('#detail_Keyword_c').html(labdata[index-1].Keyword_c);
  $('#detail_Keyword_d').html(labdata[index-1].Keyword_d);
  $('#detail_Keyword_e').html(labdata[index-1].Keyword_e);
  $('#detail_Scholar_URL').html(labdata[index-1].Scholar_URL);

  // 연구실 URL 버튼 설정
  if (labdata[index-1].URL !== "연구실 사이트 없음") {
    $('#popBtn3 .button-text').html('연구실 홈페이지');
    $('#popBtn3').css('backgroundColor', '#F5F6F7');
    $('#popBtn3 .button-text').css('color', '#3C3C3C');
    $('#popBtn3').attr('disabled', false);
    $('#popBtn3 .material-symbols-outlined').show();
    $('#popBtn3').attr('onclick', 'window.open("' + labdata[index-1].URL + '")');
    
  } else {
    $('#popBtn3 .button-text').html('연구실 홈페이지 없음');
    $('#popBtn3').css('backgroundColor', '#F5F6F7');
    $('#popBtn3 .button-text').css('color', '#A1A1A1');
    $('#popBtn3').attr('disabled', true);
    $('#popBtn3 .material-symbols-outlined').hide();
    $('#popBtn3').removeAttr('onclick'); // 클릭 이벤트 제거

  }


  // 해외 논문 URL 버튼 설정
  if (labdata[index - 1].Scholar_URL !== "해외논문 인덱스 없음") {
    $('#popBtn4 .button-text4').html('해외논문 더보기');
    $('#popBtn4').css('backgroundColor', 'transparent');
    $('#popBtn4').css('color', '#616161'); // 활성화된 텍스트 색상
    $('#popBtn4').attr('disabled', false);
    $('#popBtn4 .material-symbols-outlined').show(); // 아이콘을 활성화
    $('#popBtn4 .button4').css('border-bottom', '1px solid #616161'); // border 활성화
    $('#popBtn4').attr('onclick', 'window.open("' + labdata[index - 1].Scholar_URL + '")');

  } else {
    $('#popBtn4 .button-text4').html('해외논문 인덱스 없음');
    $('#popBtn4').css('backgroundColor', 'transparent'); // 비활성화 배경색
    $('#popBtn4').css('color', '#A1A1A1'); // 비활성화 텍스트 색상
    $('#popBtn4').attr('disabled', true);
    $('#popBtn4 .material-symbols-outlined').hide(); // 아이콘을 숨김
    $('#popBtn4 .button4').css('border-bottom', 'none'); // border 제거
    $('#popBtn4').removeAttr('onclick'); // 클릭 이벤트 제거
    
  }


  // detail_Keyword_b~e가 "."일 때 부모 div를 숨기기
const keywordIds = ["detail_Keyword_b", "detail_Keyword_c", "detail_Keyword_d", "detail_Keyword_e"];
keywordIds.forEach(id => {
    const element = document.getElementById(id);
    if (element && element.textContent.trim() === ".") {
        const parentDiv = element.closest('.keyword-box');
        if (parentDiv) {
            parentDiv.style.display = "none"; // 부모 요소 숨기기
        }
    } else if (element) {
        const parentDiv = element.closest('.keyword-box');
        if (parentDiv) {
            parentDiv.style.display = ""; // "."이 아닐 경우 표시
        }
    }
});
}
