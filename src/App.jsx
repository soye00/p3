import './App.css'
import {Button, Input, Space, Radio} from "antd";
import {useState} from "react";
import Main from "./layout/Main.jsx";
import SearchTotal from "./pages/SearchTotal.jsx";
import BusRoute from "./pages/busRoute.jsx";
import {useMediaQuery} from "react-responsive";
import {Map, useKakaoLoader} from "react-kakao-maps-sdk";
import {BrowserRouter, useNavigate} from "react-router-dom";

function App() {

    const isMobile = useMediaQuery({maxWidth: 900});
    const navigator = useNavigate();

    return (
        <>
            <header>
                {isMobile ? <img width={150} src={"/logo_word.svg"} alt={"logo"} onClick={()=>{navigator("/")}} style={{cursor:"pointer"}} /> :
                    <img width={200} src={"/header_logo.svg"} alt={'logo'} onClick={()=>{navigator("/")}} style={{cursor:"pointer"}} />}
                {isMobile ? <Button>로그인</Button> : <nav>
                    <div onClick={()=>{navigator("/my")}}>나의버스</div>
                    <div>주변정류장</div>
                    <div>이용안내</div>
                    <Button>로그인</Button>
                </nav>}
            </header>
            <main>
                <Main/>
            </main>
            <footer>
                <div>

                <div>
                    <h4>회사명 : StarBus</h4>
                    <h4>주소 : 대구 중구 중앙대로 394 제일빌딩 5F</h4>
                    <h4>대표 : 스타버스</h4>
                </div>
                <div>
                    <h4>이메일 : starbus@naver.com</h4>
                    <h4>문의전화 : 000-0000-0000</h4>
                </div>
                <div>
                    <h4>Copyright(c) All Rights Reserved.</h4>
                </div>
                </div>

            </footer>
        </>

    )
}

export default App
