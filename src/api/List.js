import { useState } from 'react';
import { Link } from 'react-router-dom';
import './list.scss';

export default function List(props){
    const [id,setid] = useState('user_id');
    const [pagenum,setpagenum] = useState(props.pagenum);
    return(
        <Link to={`/view/${pagenum}`}>
            <li>
                <div className="textTop">
                    <p>category_name</p>
                    <p>id</p>
                </div>
                <hr/>
                <p className="textMid">
                    <span>{pagenum}{id}</span>&nbsp;<i>|</i>&nbsp;<span>date</span>
                </p>
                <div className="textBottom">
                    <p>
                        Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title&nbsp;Title
                        Title&nbsp;Title
                    </p>
                    <p>
                        contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                        contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents&nbsp;contents
                    </p>
                </div>                    
            </li>
        </Link>
    )
}