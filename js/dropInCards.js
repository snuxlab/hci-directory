var Stags = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']; // 사용자가 선택한 태그의 명칭을 저장하는 변수
var CharUniv = ''; // 사용자가 검색한 대학교명을 저장하는 변수
var CharProf = ''; // 사용자가 검색한 교수명을 저장하는 변수
var CharLab = ''; // 사용자가 검색한 연구실명을 저장하는 변수
var CountLabs = 0; // 검색된 연구실의 갯수를 저장하는 변수
var excepUniv = ''; // 예외처리된 대학교명을 저장하는 변수

//연구실 목록 동적 구성

/*경우의 수 3가지
1. 태그로 검색한 경우
2. 검색어로 검색한 경우
3. 검색하지 않은 경우*/

/*1. 태그로 검색한 경우*/
function tagSearchList() {

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
    
    //연구실 디렉토리를 확인하며 Keyword에 tag를 포함하는 객체 불러옴
    for (var j = 1; j <= listLenth; j++) {
        var checkNumJ = eval('list' + j);
        var keyword = checkNumJ.Keyword_1;

        if (keyword.indexOf(Stags[0]) >= 0 && keyword.indexOf(Stags[1]) >= 0 && keyword.indexOf(Stags[2]) >= 0 && keyword.indexOf(Stags[3]) >= 0 && keyword.indexOf(Stags[4]) >= 0 && keyword.indexOf(Stags[5]) >= 0 && keyword.indexOf(Stags[6]) >= 0 && keyword.indexOf(Stags[7]) >= 0 && keyword.indexOf(Stags[8]) >= 0 && keyword.indexOf(Stags[9]) >= 0 && keyword.indexOf(Stags[10]) >= 0 && keyword.indexOf(Stags[11]) >= 0 && keyword.indexOf(Stags[12]) >= 0 && keyword.indexOf(Stags[13]) >= 0 && keyword.indexOf(Stags[14]) >= 0 && keyword.indexOf(Stags[15]) >= 0 && keyword.indexOf(Stags[16]) >= 0 && keyword.indexOf(Stags[17]) >= 0 && keyword.indexOf(Stags[18]) >= 0 && keyword.indexOf(Stags[19]) >= 0 && keyword.indexOf(Stags[20]) >= 0 && keyword.indexOf(Stags[21]) >= 0 && keyword.indexOf(Stags[22]) >= 0 && keyword.indexOf(Stags[23]) >= 0 && keyword.indexOf(Stags[24]) >= 0 && keyword.indexOf(Stags[25]) >= 0) {
            tagList += '<a onclick="I(' + checkNumJ.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNumJ.LabTitle + '</div><div class="card_prof">' + checkNumJ.Prof + ' 교수&ensp;|&ensp;' + checkNumJ.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNumJ.Keyword_1 + '</div><br></div></div></article></a>';
            CountLabs++;
        }
    }

    //아무것도 검색하지 않았을 때 모든 연구실 등장
    if (Stags[0] === '#' && Stags[1] === '#' && Stags[2] === '#' && Stags[3] === '#' && Stags[4] === '#' && Stags[5] === '#' && Stags[6] === '#' && Stags[7] === '#' && Stags[8] === '#' && Stags[9] === '#' && Stags[10] === '#' && Stags[11] === '#' && Stags[12] === '#' && Stags[13] === '#' && Stags[14] === '#' && Stags[15] === '#' && Stags[16] === '#' && Stags[17] === '#' && Stags[18] === '#' && Stags[19] === '#' && Stags[20] === '#' && Stags[21] === '#' && Stags[22] === '#' && Stags[23] === '#' && Stags[24] === '#' && Stags[25] === '#' && CharUniv === '' && CharProf === '' && CharLab === '') {
        CountLabs = 0;
        for (var i = 1; i <= listLenth; i++) {
            var checkNum = eval('list' + i);

            tagList += '<a onclick="I(' + checkNum.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNum.LabTitle + '</div><div class="card_prof">' + checkNum.Prof + ' 교수&ensp;|&ensp;' + checkNum.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNum.Keyword_1 + '</div><br></div></div></article></a>';
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
                CharUniv = 'GIST (광주과학기술원)';
                break;
            case '한국과학기술원':
            case 'KAIST':
            case 'kaist':
            case '카이스트':
                CharUniv = 'KAIST (한국과학기술원)';
                break;
            case '서울미디어대학원대학교':
            case 'SMIT':
            case 'smit':
                CharUniv = 'SMIT (서울미디어대학원대학교)';
                break;
            case '울산과학기술원':
            case 'UNIST':
            case 'unist':
            case '유니스트':
                CharUniv = 'UNIST (울산과학기술원)';
                break;
            default:
                break;
        }
        CountLabs = 0;
        for (var a = 1; a <= listLenth; a++) {
            var checkNumA = eval('list' + a);

            if (CharUniv == checkNumA.Univ) {
                tagList += '<a onclick="I(' + checkNumA.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNumA.LabTitle + '</div><div class="card_prof">' + checkNumA.Prof + ' 교수&ensp;|&ensp;' + checkNumA.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNumA.Keyword_1 + '</div><br></div></div></article></a>';
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
        for (var b = 1; b <= listLenth; b++) {
            var checkNumB = eval('list' + b);

            if (CharProf == checkNumB.Prof) {
                tagList += '<a onclick="I(' + checkNumB.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNumB.LabTitle + '</div><div class="card_prof">' + checkNumB.Prof + ' 교수&ensp;|&ensp;' + checkNumB.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNumB.Keyword_1 + '</div><br></div></div></article></a>';
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
        for (var c = 1; c <= listLenth; c++) {
            var checkNumC = eval('list' + c);
            var checkA = checkNumC.LabTitle.toLowerCase();
            var checkB = CharLab.toLowerCase();

            if (checkA.indexOf(checkB) !== -1) {
                tagList += '<a onclick="I(' + checkNumC.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNumC.LabTitle + '</div><div class="card_prof">' + checkNumC.Prof + ' 교수&ensp;|&ensp;' + checkNumC.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNumC.Keyword_1 + '</div><br></div></div></article></a>';
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
        for (var i = 1; i <= listLenth; i++) {
            var checkNum = eval('list' + i);

            tagList += '<a onclick="I(' + checkNum.LabKey + ');"><article class="card"><div class="card__info"><div class="card_top"><div class="card_LabName">' + checkNum.LabTitle + '</div><div class="card_prof">' + checkNum.Prof + ' 교수&ensp;|&ensp;' + checkNum.Univ + '</div></div><div class="card_bottom"><div class="card_keyword"><svg width="18" height="18" viewBox="0 0 15 15" class="bi bi-tag" fill="#6a6a6a" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>연구실 키워드</div><div class="card_tag">' + checkNum.Keyword_1 + '</div><br><div></div></article></a>';
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

    var checkNum = eval('list' + index);
    $('#detail_LabTitle').html(checkNum.LabTitleFull);
    $('#detail_Univ').html(checkNum.Univ);
    $('#detail_Prof').html(checkNum.Prof);
    $('#detail_Major').html(checkNum.Major);
    $('#detail_Email').html(checkNum.Email);
    $('#detail_Keyword_1').html(checkNum.Keyword_1);
    $('#detail_Paper').html(checkNum.Paper);
    $('#detail_Keyword_2').html(checkNum.Keyword_2);

    if (checkNum.URL !== "연구실 사이트 없음") {
        $('#popBtn1').html('연구실 홈페이지 바로가기');
        $('#popBtn1').css('backgroundColor', '#0083c7');
        $('#popBtn1').attr('disabled', false);
        $('#popBtn1').attr('onclick', 'window.open("' + checkNum.URL + '")');


    } else {
        $('#popBtn1').html('연구실 홈페이지 없음');
        $('#popBtn1').css('backgroundColor', 'lightgray');
        $('#popBtn1').attr('disabled', true);
    }

}