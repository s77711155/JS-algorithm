/*
*  화면 로직(index.js)
*  로컬환경에선 import/export  모듈사용하여 파일 구분x, 임의로 주석처리로 구분
* */
window.onload = init;

// mouse event 관련 객체
const mouse = {
    dragTarget: null,
    dragX: null,
    dragY: null,
    dragAble: false
};

// resize event 관련 객체
const resize = {
    startResizeX: null,
    startResizeY: null,
    startResizeWidth: null,
    startResizeHeight: null,
    resizeAble: false,
    resizingTarget: null
};

function init() {
    getMemos();
    eventAction();
}


//event function
const eventAction = () =>{
    // 마우스 우클릭
    const wrap = document.querySelector('.wrap');
    wrap.addEventListener('contextmenu',(event)=> createMemo(event,findHighestOrder()))
};

// drew dom
const drawMemo = (memoInfo) => {
    const wrap = document.querySelector('.wrap');
    const baseMemo = document.getElementsByClassName("memo")[0];
    const createMemo = baseMemo.cloneNode(true);
    // child node
    const closeBtn = createMemo.querySelector('.btn_close');
    const textCnt = createMemo.querySelector('.textarea');
    const header = createMemo.querySelector('.header');
    const btnSize = createMemo.querySelector('.btn_size');
    createMemo.dataset.index = memoInfo.id;
    createMemo.setAttribute('style', `display:block; top:${memoInfo.top}px; left:${memoInfo.left}px; z-index:${memoInfo.order}`);
    textCnt.setAttribute('style', `width:${memoInfo.width}px; height:${memoInfo.height}px`);
    textCnt.textContent = memoInfo.content;

    // event action bind
    closeBtn.addEventListener('click',(event)=> removeMemo(event));
    textCnt.addEventListener('click',(event)=> onFocusTarget(event, event.target.parentNode.parentNode));
    textCnt.addEventListener('keyup',(event)=> updateMemo(event.target.parentNode.parentNode,  event.target.textContent, 'content'));
    header.addEventListener('mousedown',(event)=> onMoveStartMemo(event), false);
    btnSize.addEventListener('mousedown',(event)=> resizeMemo(event),false);
    createMemo.addEventListener('mouseup',(event)=> onMoveEndMemo(event),false);

    wrap.append(createMemo)
};

// resize event
const resizeMemo = (e) => {
    let target = e.target.parentNode.parentNode;
    let resizeArea = target.querySelector('.textarea');
    onFocusTarget(e,target);

    resize.startResizeX = e.clientX;
    resize.startResizeY = e.clientY;
    resize.startResizeWidth = parseInt(document.defaultView.getComputedStyle(resizeArea).width, 10);
    resize.startResizeHeight = parseInt(document.defaultView.getComputedStyle(resizeArea).height, 10);
    resize.resizingTarget = resizeArea;

    document.documentElement.addEventListener('mousemove', onResizing, false);
    document.documentElement.addEventListener('mouseup', stopResize, false);
    resize.resizeAble = true;
};

const onResizing = (e) => {
    if (!resize.resizeAble) return;
    let resizeArea =  resize.resizingTarget;
    let size ={
        width: resize.startResizeWidth + e.clientX - resize.startResizeX,
        height: resize.startResizeHeight + e.clientY - resize.startResizeY
    };
    resizeArea.style.width =  size.width + 'px';
    resizeArea.style.height = size.height + 'px';
    updateMemo(resize.resizingTarget.parentNode.parentNode, size,'size');
};

const stopResize = (e) => {
    resize.resizeAble = false;
    document.documentElement.removeEventListener('mousemove', onResizing, false);
    document.documentElement.removeEventListener('mouseup', onResizing, false);
};

// drag event
const onMoveStartMemo =(e) => {
    let memo = e.target.parentNode;
    onFocusTarget(e,memo);
    mouse.dragAble = true;
    mouse.dragTarget = memo;

    let shift = {
        x: e.clientX - memo.getBoundingClientRect().left,
        y: e.clientY - memo.getBoundingClientRect().top
    };

    onMoveMemo(e, shift);
    document.addEventListener('mousemove', (e) => onMoveMemo(e, shift));

};

const onMoveMemo =(e,shift) => {
    if (!mouse.dragAble) return;
    let target = mouse.dragTarget;
    let left = e.pageX - shift.x ;
    let top = e.pageY - shift.y ;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    mouse.dragX = left;
    mouse.dragY = top;
};

const onMoveEndMemo = e =>{
    // 드래그가 끝날 시 데이터 업데이트
    if (mouse.dragAble) updateMemo(e.target.parentNode,{top:mouse.dragY, left: mouse.dragX },'position');
    mouse.dragAble = false;
    document.removeEventListener('mousemove',onMoveMemo);
    e.target.onmouseup = null;
};

// 메모 삭제
const removeMemo = (e) => {
    const wrap = document.querySelector('.wrap');
    let target = e.target.parentNode.parentNode;
    wrap.removeChild(target);

    // 데이터 삭제
    deleteMemo(target.dataset.index)
};

const drawHighestOrder = (target,changeTarget) => {
    target.style.zIndex = changeTarget.order;
};


/*
* 데이터 로직(memoService.js)
*
* */

// 메모데이터 생성
const createMemo = (e, order) =>{
    e.preventDefault();
    let memoInfo = {
        id: order + 1,
        content: '',
        top: e.pageY,
        left: e.pageX,
        width: 200,
        height:100,
        order: order + 1
    };
    let storage = JSON.parse(localStorage.getItem('memoArray')) || [];
    storage.push(memoInfo);
    localStorage.setItem('memoArray',JSON.stringify(storage));

    drawMemo(memoInfo)
};

// 메모데이터 삭제
const deleteMemo = (targetId) => {
    let storage = JSON.parse(localStorage.getItem('memoArray')).filter(v => parseInt(v.id) !== parseInt(targetId)) || [];
    localStorage.setItem('memoArray',JSON.stringify(storage));
};

// 메모 데이터 업데이트 (content, size, 위치)
const updateMemo = (target, value, changeType)=> {
    let storage = JSON.parse(localStorage.getItem('memoArray')) || [];
    let idx = target.dataset.index;
    let findMemoFromStorage = findMemo(idx);

    if (changeType == 'content') {
        findMemoFromStorage.content = value || '';
    } else if(changeType == 'position') {
        findMemoFromStorage.top =  value.top;
        findMemoFromStorage.left = value.left;
    }else if (changeType == 'size') {
        findMemoFromStorage.width = value.width;
        findMemoFromStorage.height = value.height;
    }

    let updateMemos = storage.map(v=> parseInt(v.id) ===  parseInt(idx) ? findMemoFromStorage : v );
    localStorage.setItem('memoArray',JSON.stringify(updateMemos));
};


// 기존 메모 불러오기
const getMemos = () => {
    let storage = JSON.parse(localStorage.getItem('memoArray'))|| [];
    if (storage.length === 0) return;
    storage.forEach(v =>  drawMemo(v));
};

// 메모 순서 찾기
const findHighestOrder =  () => {
    let memoArray = JSON.parse(localStorage.getItem('memoArray')) || false;
    return !memoArray ? 0 : Math.max.apply(null, memoArray.map(v => v.order));
};

const findMemo = (targetId) => {
    let storage = JSON.parse(localStorage.getItem('memoArray')) || [];
    return storage.find(v => parseInt(v.id) === parseInt(targetId));
};

// 포커스 할 메모 데이터 찾기
const onFocusTarget = (e, target) => {
    let storage = JSON.parse(localStorage.getItem('memoArray')) || [];
    let findMemoFromStorage = findMemo(target.dataset.index);
    let prevOrder = findMemoFromStorage?.order;
    findMemoFromStorage.order = prevOrder === findHighestOrder() ? prevOrder : findHighestOrder() + 1;
    let updateMemos = storage.map(v=> parseInt(v.id) === parseInt(target.dataset.index) ? findMemoFromStorage : v );
    localStorage.setItem('memoArray',JSON.stringify(updateMemos));
    drawHighestOrder(target,findMemoFromStorage)
};