import {Component} from 'react'
import './index.css'

class TimerGuru extends Component{
    state={date:new Date()}

    componentDidMount(){
        this.timerId=setInterval(this.tick,1000)
    }

    

    tick=()=>{
        this.setState({date:new Date()})
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    } 

    render(){
        const {date} =this.state
        
        return(
            
                <h1 className="timer">{date.toLocaleTimeString()}</h1>
           
        )
    }
}
export default TimerGuru;