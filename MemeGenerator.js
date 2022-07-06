import React from "react"
import { ReactDOM } from "react"
import { Component } from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }
        this.handleChange=this.handleChange.bind(this)
        this.GenerateMeme=this.GenerateMeme.bind(this)
    }

    componentDidMount(){

        fetch("https://api.imgflip.com/get_memes")
        .then((response)=>response.json())
        .then((response)=>{
            const {memes} =response.data
            this.setState({
                allMemeImgs:memes
            })
        })
    }

    handleChange(event){
        const {name,value} = event.target //pulls out name and value properties
        this.setState({
            [name]: value
        })
    }
    GenerateMeme(event){
        event.preventDefault()
        const memesLength= this.state.allMemeImgs.length
        const randomNum=Math.floor(Math.random() * ((memesLength-1) - 0 + 1) + 0)
        this.setState({randomImage:this.state.allMemeImgs[randomNum].url})
    
    }

    render(){

        return(
            <div>
                <form onSubmit={this.GenerateMeme}>
                    <input onChange={this.handleChange} type="text" name="topText" value={this.state.topText} placeholder="top text" /><br/>
                    <input onChange={this.handleChange} type="text" name="bottomText" value={this.state.bottomText} placeholder="bottom text" /><br/>
                    <button>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImage} alt=""/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator