import { Component } from "react";
import '../css/home-emoji.css';
import ListOfEmojis from '../component/emoji-list.js';
import Button from '@material-ui/core/Button';

class SearchSymbols extends Component{

    constructor(props){
        super(props);
        this.state = {
            EmojyName :"",
            EmojiFace:"",
            List_Emoji : ListOfEmojis,
            displaySearchData:[]
        }
    }

    handleSearch=(e)=>{
        if(e.target.value){
            let getvalue = e.target.value
            let data = this.state.List_Emoji.filter(searchitem=> searchitem.text.toLowerCase().includes(getvalue.toLowerCase()));
            console.log(data);
            this.setState({displaySearchData:data});
        }else{
            this.setState({displaySearchData:[]});  
        }       
    }

    showEmojyName(item,face){
        this.setState({EmojyName:item,EmojiFace:face})

    }

    render(){
          console.log("this.state.displaySearchData==>",this.state.displaySearchData)
        return(
            <div> 
                <div className="emoji-search-textfield-container">
                    <input type="text" name="search" placeholder="Search.." className="emoji-search-textfield" onChange={this.handleSearch}/>
                </div>
                      
                <div className="displaySearchData"> 
                {this.state.displaySearchData.length === 0 ? <div style={{paddingLeft:'45%'}}> emoji not found </div>:
                   this.state.displaySearchData.map((item,index)=>{
                       return(
                           <span>
                               {item.Symbol}
                           </span>
                       )
                   }) 
                   }
                   </div>
                  <br/>
                  <div className="display-emoji">
                    {this.state.EmojyName?<div>{" Emoji name :-) "+this.state.EmojyName}{this.state.EmojiFace}</div>:""}
                </div>
                <br/>
                <div className="display-emoji" style={{display:'contents'}}>
                    {
                        ListOfEmojis.map((item,index)=>{
                           return(
                              <Button id={item.text} className={item.text} onClick={()=>this.showEmojyName(item.text,item.Symbol)} style={{fontSize:'10px',padding:'none'}}> 
                                   {item.Symbol}
                              </Button> 
                           )
                          
                        })
                    }


                </div>
            
            </div>
        )
    }
}

export default SearchSymbols;