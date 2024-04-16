import React, { useEffect, useRef, useState } from 'react'

// Custom Hook : 
// - 리엑트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출가능
// - 함수명을 use 로 시작하게 작성하여 커스텀 훅 함수를 만들 수 있음
// - 커스텀 훅 함수에는 다른 훅 함수를 포함할 수 있음

function usePagination(totalList: string[]) {

    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBoardList] = useState<string[]>([]);
    const [viewList, setViewList] = useState<string[]>([]); 
    const [viewPageList, setViewPageList] = useState<number[]>([]); 

    const totalPageCount = useRef<number>(1);
    const totalSectionCount = useRef<number>(1);

    const COUNT_PER_PAGE = 5;
    const COUNT_PER_SECTION = 10;
    
    const setNextSection = () => {
        if (section === totalSectionCount.current) return;
        setSection(section + 1);

        const page = (section + 1) * COUNT_PER_SECTION + 1;
        setPage(page);
    };

    const setPreviousSection = () => {
        if (section === 1) return;
        setSection(section - 1);

        const page = (section - 1) * COUNT_PER_SECTION;
        setPage(page);
    };

    const changeViewList = (boardList: string[]) => {
        const viewList = [];
        const currentPageStart = COUNT_PER_PAGE * (page - 1);
        const currentPageEnd = COUNT_PER_PAGE * page - 1;

        for (let index = currentPageStart; index <= currentPageEnd; index++) {
            if (index >= boardList.length) break;
            viewList.push(boardList[index]);
        }
        setViewList(viewList);
    };

    const changeViewPageList = () => {
        const viewPageList = [];
        const currentSectionStart = COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
        const currentSectionEnd = COUNT_PER_SECTION * section;

        for (let page = currentSectionStart; page <= currentSectionEnd; page++) {
            if (page > totalPageCount.current) break;
            viewPageList.push(page);
        }
        setViewPageList(viewPageList);
    };

    useEffect(() => {
        const boardList = totalList;
        setBoardList(boardList);
        totalPageCount.current = Math.floor((boardList.length -1) / COUNT_PER_PAGE) + 1;
        totalSectionCount.current = Math.floor((boardList.length -1) / COUNT_PER_PAGE * COUNT_PER_SECTION) + 1;

        changeViewList(boardList);
        changeViewPageList();
    }, []);

    useEffect(() => {
        if (!boardList.length) return;
        changeViewList(boardList);
    }, [page]);

    useEffect(() => {
        changeViewPageList();
    }, [section]);

    return {
        page, setPage, viewList, viewPageList, setPreviousSection, setNextSection
    }
}

export default function CustomHook() {
    
    const { page, setPage, viewList, viewPageList, setPreviousSection, setNextSection } = usePagination(BOARD_LIST);

    return (
    <div>
        {viewList.map((item, index) => <h3 key={index}>{item}</h3>)}
        <div>
            <span style={{ display: 'inline-block', margin: '4px' }} onClick={setPreviousSection}>이전</span>
                {viewPageList.map((item, index) => <span key={index} 
                style={{ display: 'inline-block', margin: '4px', fontWeight: item === page ? 900 : 400 }} 
                onClick={()=>setPage(item)}>{item}</span>)}
            <span style={{ display: 'inline-block', margin: '4px' }} onClick={setNextSection}>이후</span>
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
    '게시물 41','게시물 42','게시물 43','게시물 44','게시물 45',
    '게시물 46','게시물 47','게시물 48','게시물 49','게시물 50',
    '게시물 51','게시물 52','게시물 53','게시물 54','게시물 55',
    '게시물 56','게시물 57','게시물 58','게시물 59','게시물 60',
    '게시물 61','게시물 62','게시물 63','게시물 64','게시물 65',
    '게시물 66','게시물 67','게시물 68','게시물 69','게시물 70',
    '게시물 71','게시물 72','게시물 73','게시물 74','게시물 75',
    '게시물 76','게시물 77','게시물 78','게시물 79','게시물 80',
    '게시물 81','게시물 82','게시물 83','게시물 84','게시물 85',
    '게시물 86','게시물 87','게시물 88','게시물 89','게시물 90',
    '게시물 91','게시물 92','게시물 93','게시물 94','게시물 95',
    '게시물 96','게시물 97',
];
