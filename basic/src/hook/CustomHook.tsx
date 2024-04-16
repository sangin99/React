import React, { useEffect, useState } from 'react'

// Custom Hook : 
// - 리엑트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출가능

export default function CustomHook() {
    
    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBoardList] = useState<string[]>([]);
    const [viewList, setViewList] = useState<string[]>([]); 
    const [viewPageList, setViewPageList] = useState<number[]>([]); 

    const COUNT_PER_PAGE = 5;
    const COUNT_PER_SECTION = 10;

    let totalPageCount = 0;
    let totalSectionCount = 0;
    
    const setNextPage = () => {

    }

    const setPreviousPage = () => {

    }

    const setNextSection = () => {

    }

    const setPreviousSection = () => {

    }

    useEffect(() => {
        const boardList = BOARD_LIST;
        setBoardList(BOARD_LIST);
        totalPageCount = Math.floor((boardList.length -1) / COUNT_PER_PAGE) + 1;
        totalSectionCount = Math.floor((boardList.length -1) / COUNT_PER_PAGE * COUNT_PER_SECTION) + 1;

        const viewList = [];
        const currentPageStart = COUNT_PER_PAGE * (page - 1);
        const currentPageEnd = COUNT_PER_PAGE * page - 1;

        for (let index = currentPageStart; index <= currentPageEnd; index++) {
            if (currentPageEnd >= boardList.length) break;
            viewList.push(boardList[index]);
        }
        setViewList(viewList);

        const viewPageList = [];
        const currentSectionStart = COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
        const currentSectionEnd = COUNT_PER_SECTION * section;

        for (let page = currentSectionStart; page <= currentSectionEnd; page++) {
            if (page > totalPageCount) break;
            viewPageList.push(page);
        }
        setViewPageList(viewPageList);

    }, [])

    return (
    <div>
    {viewList.map((item, index) => <h3 key={index}>{item}</h3>)}
        <div>
            <span style={{ display: 'inline-block', margin: '4px' }}>이전</span>
            {viewPageList.map((item, index) => <span key={index} style={{ display: 'inline-block', margin: '4px', fontWeight: item === page ? 900 : 400 }}>{item}</span>)}
            <span style={{ display: 'inline-block', margin: '4px' }}>이후</span>
        </div>
    </div>
    );
}

const BOARD_LIST = [
    '게시물 1','게시물 2','게시물 3','게시물 4','게시물 5',
    '게시물 6','게시물 7','게시물 8','게시물 9','게시물 10',
    '게시물 11','게시물 12','게시물 13','게시물 14','게시물 15',
    '게시물 16','게시물 17','게시물 18','게시물 19','게시물 20',
    '게시물 21','게시물 22','게시물 23','게시물 24','게시물 25',
    '게시물 26','게시물 27','게시물 28','게시물 29','게시물 30',
    '게시물 31','게시물 32','게시물 33','게시물 34','게시물 35',
    '게시물 36','게시물 37','게시물 38','게시물 39','게시물 40',
    '게시물 41','게시물 42',
]
