import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AdList from './api/AdList';
import Category from './api/Category';
import List from './api/List';
import View from './api/View';
import './app.scss';

function App() {  
  //오름차순
  /*
  const oddeven =1;
  const od = document.getElementById("oddclick"); 
  */
  function oddclick(){ 
  /*  
    if(oddeven==1){
        // css 적용   
        od.classList.add("oddEven");

        //sort 함수 이용
        //state
        oddeven=0;
    }else{
      // css 해제
      od.classList.remove("oddEven");      
      oddeven=1;      
    }
  */
  }

  //모달
  function clickOpen(){
    //state props
  }

  //스크롤
  //state scroll

  return (
    <BrowserRouter>
      <div id="WrittenWrap"> 
        <h2>[05/13]조아현</h2>
        <hr/>
        <Switch>
          <div id="WrittenArea">            
            <Route exact path="/">
            <div id="loginWrap"><a href="#" title="로그인"><strong>로그인</strong></a></div>
            <div id="textWrap">
              <div id="btnWrap">
                  <p id="leftBtn">
                      <button id="oddclick" type="button" onClick={oddclick}><span>●</span>오름차순</button>
                      <button type="button"><span>●</span>내림차순</button>
                  </p>
                  <p id="rightBtn">
                    <button type="button" onclick={clickOpen}>필터</button>
                  </p>                 
              </div>
              <div id="textArea">
                <ul>
                  <List pagenum={1}/>
                  <List pagenum={2}/>
                  <List pagenum={3}/>
                  <AdList/>
                  <List pagenum={4}/>
                </ul>
              </div>                
            </div>
            </Route> 
            <Route path="/view/:num">
              <View/>
            </Route>        
          </div>               
          <Category/>
        </Switch>        
      </div>
    </BrowserRouter>    
  );
}

export default App; 