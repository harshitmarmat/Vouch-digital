import { Button } from 'antd';
import './ButtonUI.css'

const ButtonUI = (props) => {
    const classes = props.className + ' btn'
    return (
        <Button htmlType={props.type} className={classes} type="primary" >
            {props.title}
        </Button>
    )
}

export default ButtonUI;