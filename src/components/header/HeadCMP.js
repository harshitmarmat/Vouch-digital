import ButtonUI from '../UI/ButtonUI';
import classes from './HeadCMP.module.css'

const HeadCMP = () =>{
    return (
        <section className={classes.header}>
            <div>
                <h2>ATools
                    <span>.</span>
                </h2>
            </div>
            <div className={classes.btn}>
                <ButtonUI
                    className={classes['startBtn']}
                    title='Start Free Trial'
                />
                <ButtonUI
                    className={classes['loginBtn']}
                    title='Login'
                />
            </div>
        </section>
    )
}

export default HeadCMP;