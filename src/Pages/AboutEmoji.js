import { Component } from "react";
import image from '../img/emoji.jpg';
class AboutEmoji extends Component{
    render(){
        return(
            <div className="aboutemoji" style={{justifyContent:'center',fontSize:'1.2rem'}}>
                <table>
                    <tbody>
                        <tr>
                            <td style={{paddingLeft:'5%'}}> 
                                <p>
                                &nbsp; &nbsp; Emoji are pictographs (pictorial symbols) that are typically presented in a colorful form and used inline in text. 
                                They represent things such as faces, weather, vehicles and buildings, food and drink, animals and plants, or icons that represent emotions, 
                                feelings, or activities.  To the computer they are simply another character, 
                                but people send each other billions of emoji everyday to express love, thanks, congratulations, or any number of a growing set of ideas.
                                </p>
                            </td>
                            <td> 
                               <img src={image} style={{width:'60%',height:'50%'}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AboutEmoji;