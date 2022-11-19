import {Component} from 'react'
import TimerGuru from './components/TimerGuru'
import './App.css'


class App extends Component{
    state={isShowing:false}

    onClickChange=()=>{
        this.setState(prevState=>{
            const {isShowing}=prevState
            return{isShowing:!isShowing}
        })
    }


    render(){
        const {isShowing}=this.state
        
        return(
            <div className="background">

                <div className="background-2">

                <h1 className="head">Timer Guru</h1>

                    <button type="button" className="button" 
                    onClick={this.onClickChange}>{isShowing? "Hide":"Show"}

                    </button>

                    {isShowing &&<TimerGuru/>}</div>
 
            </div>
        
        )
    }
}
export default App