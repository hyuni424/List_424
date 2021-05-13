import { Link } from 'react-router-dom';
import './Category.scss';

export default function category(props){
    const {close} =this.props;
    return(
        <div id="categoryWrap">
            <div id="categoryArea">                                  
                <p id="closeBtn">
                    <span onclick={close}>x</span>
                </p>               
                <p id="cate_title">필터</p>
                <div id="checkArea">
                    <from action="#" method="get">
                        <fieldset>
                            <legend>check_box</legend>
                            <p className="chkBox"><input type="checkbox" name="chkBox" title="체크1"/><span>category_name</span></p>
                            <p className="chkBox"><input type="checkbox" name="chkBox" title="체크1"/><span>category_name</span></p>
                            <p className="chkBox"><input type="checkbox" name="chkBox" title="체크1"/><span>category_name</span></p>
                            <p id="saveBox"><input type="submit" title="저장하기" value="저장하기"/></p>
                        </fieldset>
                    </from>
                </div>
            </div>
        </div>        
    );
}