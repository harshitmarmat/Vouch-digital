import classes from './ContentCMP.module.css';
import image from '../../assets/images/main.jpg'
import Form from '../form/Form';

const ContentCMP = () => {
    return(
        <div className={classes.container}>
            <div className={classes.formCnt}>
                <Form/>
            </div>
            <div className={classes.imageCnt}>
                <img src={image} alt='title'/>
            </div>
        </div>
    )
}

export default ContentCMP;