import './list.scss';

export default function AdList(){
    return(
        <li className="adArea">
            <p className="adTop">sponsored</p>
            <div className="adBottom">
                <p className="adImg"></p>
                <div className="textBottom">
                    <p>
                        Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title
                        Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title
                    </p>
                    <p>
                        contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                        contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                        contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                    </p>
                </div>    
            </div>            
        </li>   
    );
}