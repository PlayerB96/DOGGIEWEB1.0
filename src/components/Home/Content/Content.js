import './Content.scss';
import woman from '../../../assets/imgs/woman.png';
import student from '../../../assets/imgs/student.png';
import arrow from '../../../assets/imgs/arrow.svg';
import uparrow from '../../../assets/imgs/uparrow.svg';
import wssplogo from '../../../assets/imgs/wssplogo.svg';

export default function Content(props){

    return(
        <div className="content-block">
            <div className="block-info">
                <div className="info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
                </div>
                <button className="b-button">
                    Solicita tu cotización
                </button>
                <div className="mult-info">
                    <div className="student-container">
                        <img className="student" src={student} alt="student"/>
                    </div>
                    <div className="redir-container">
                        <div className="msg">
                            Juntos podemos
                        </div>
                        <div className="video-redir">
                            Ver video
                            <img className="arrow" src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-image">
                <img className="woman" src={woman} alt="woman"/>
            </div>
        </div>
    );
}