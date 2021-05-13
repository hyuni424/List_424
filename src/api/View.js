import "./View.scss";

export default function View(){
    return (
        <div id="viewWrap">
            <div id="viewCom">
                <p>
                    Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title
                    Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title
                </p>
                <p className="content">
                    contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                    contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                    contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                    contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                </p>                           
                <span>date</span>
            </div>
            <p id="viewReCount">답변 <i>2</i></p>
            <div id="viewReCom">
                <ul>
                    <li>
                        <div className="viewRe">
                            <p>reply_user_name</p>
                            <hr/>                            
                            <p className="content">
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                            </p>
                            <span>date</span>
                        </div>                    
                    </li>
                    <li>
                        <div className="viewRe">
                            <p>reply_user_name</p>
                            <hr/>                            
                            <p className="content">
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                                contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                            </p>  
                            <span>date</span>
                        </div>                    
                    </li>
                </ul>
            </div>
        </div>
    )
}