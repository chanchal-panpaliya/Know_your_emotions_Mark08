import { Component } from "react";

const ListOfEmojis = [
    { text :"Smiling",Symbol:'😊'},
    { text:"disbelief",Symbol:'😳'},
    { text:"sad",Symbol:'😔'},
    { text:"takeout box",Symbol:'🥡'},
    { text:"love",Symbol:'❤️'},
    { text:"annoyance",Symbol:'😑'},
    { text:"face",Symbol:'😀'},
    { text:"face",Symbol:'😁'},
    { text:"face",Symbol:'😂'},
    { text:"face",Symbol:'😬'},
    { text:"face",Symbol:'😅'},
    { text:"face",Symbol:'😆'},
    { text:"face",Symbol:'😇'},
    { text:"face",Symbol:'😉'},
    { text:"face",Symbol:'🙂'},
    { text:"face",Symbol:'🙃'},
    {text:"face",Symbol:'😋'},
    {text:"face",Symbol:'😌'},
    {text:"face",Symbol:'😍'},
];

const ListOfEmojis1 = [
    {text:"Face" ,Symbol:'😇'},
    {text:"Hearts",Symbol:'🥰'},
    {text:"Heart-Eyes",Symbol:'😍'},
    {text:"Star-Struck",Symbol:'🤩'},
    {text:"Kiss",Symbol:'😘'},
    {text:"Food",Symbol:'😋'},
    {text:"Tongue",Symbol:'😛'},
    {text:"Winking",Symbol:'😜'},
    {text:"Face Zany",Symbol:'🤪'},
    {text:"Squinting Face with Tongue",Symbol:'😝'},
    {text:"Money-Mouth Face",Symbol:'🤑 '},
    {text:"Hugging Face",Symbol:'🤗'},
    {text:"Face with Hand Over Mouth",Symbol:'🤭'},
    {text:"Face Exhaling",Symbol:'😮‍💨'},
    {text:"Shushing Face",Symbol:'🤫'},
    {text:"Thinking Face",Symbol:'🤔'},
    {text:"Zipper-Mouth Face",Symbol:'🤐'},
    {text:"Mask",Symbol:'😷'},
    {text:"Sleeping",Symbol:'😴'},
];

const ListOfEmojis2 = [
    {text:"Drooling",Symbol:'🤤'},
    {text:"Sleepy",Symbol:'😪'},
    {text:"sad",Symbol:'😔'},
    {text:"Lying Face",Symbol:'🤥'},
    {text:"Face with Head-Bandage",Symbol:'🤕'},
    {text:"Nauseated",Symbol:'🤢'},
    {text:"Vomiting",Symbol:'🤮'},
    {text:"Sneezing",Symbol:'🤧'},
    {text:"Hot",Symbol:'🥵'},
    {text:"Cold",Symbol:'🥶'},
    {text:"Woozy",Symbol:'🥴'},
    {text:"Sunglasses",Symbol:'😎'},
    {text:"Exploding",Symbol:'🤯'},
    {text:"Spiral Eyes",Symbol:'😵‍💫'},
    {text:"Hat Face",Symbol:'🤠'},
    {text:"Partying",Symbol:'🥳'},
    {text:"Confused",Symbol:'😕'},
    {text:"Pleading",Symbol:'🥺'},
    {text:"Angry",Symbol:'👿'},
];

const ListOfEmojis3 =[
    {text:"Horns",Symbol:'😈'},
    {text:"Angry",Symbol:'😠'},
    {text:"Angry",Symbol:'😡'},
    {text:"Yawning",Symbol:'🥱'},
    {text:"Skull",Symbol:'💀'},
    {text:"Skull",Symbol:'☠️'},
    {text:"Pile",Symbol:'💩'},
    {text:"Clown",Symbol:'🤡'},
    {text:"Ogre",Symbol:'👹'},
    {text:"Goblin",Symbol:'👺'},
    {text:"Ghost",Symbol:'👻'},
    {text:"Alien",Symbol:'👽'},
    {text:"Alien Monster",Symbol:'👾'},
    {text:"Robot",Symbol:'🤖'},
    {text:"Cat",Symbol:'😺'},
    {text:"Cat",Symbol:'😸'},
    {text:"Cat with Tears",Symbol:'😹'},
    {text:"Kiss",Symbol:'💋'},
    {text:"Hand",Symbol:'👋'},
]

const ListOfEmojis4 =[
    {text:"Hand",Symbol:'🤚'},
    {text:"Hand with Fingers",Symbol:'🖐️'},
    {text:"Raised Hand",Symbol:'✋'},
    {text:"ok",Symbol:'👌'},
    {text:"Victory",Symbol:'✌️'},
    {text:"Pinching",Symbol:'🤏'},
    {text:"Crossed Fingers",Symbol:'🤞'},
    {text:"Gesture",Symbol:'🤟'},
    {text:"Horns",Symbol:'🤘'},
    {text:"Call Me",Symbol:'🤙'},
    {text:"Left",Symbol:'👈'},
    {text:"Right",Symbol:'👉'},
    {text:"Down",Symbol:'👇'},
    {text:"UP",Symbol:'🖕'},
    {text:"Index",Symbol:'☝️'},
    {text:"Raising",Symbol:'🙌'},
    {text:"Folded",Symbol:'🙏'},
    {text:"Writing",Symbol:'✍️'},
    {text:"Selfie",Symbol:'🤳'},
]

const ListOfEmojis5 =[
    {text:"Foot",Symbol:'🦶'},
    {text:"Ear",Symbol:'👂'},
    {text:"Nose",Symbol:'👃'},
    {text:"Brain",Symbol:'🧠'},
    {text:"Tooth",Symbol:'🦷'},
    {text:"Bone",Symbol:'🦴'},
    {text:"Eyes",Symbol:'👀'},
    {text:"Mouth",Symbol:'👄'},
    {text:"Baby",Symbol:'👶'},
    {text:"Child",Symbol:'🧒'},
    {text:"Boy",Symbol:'👦'},
    {text:"Girl",Symbol:'👧'},
    {text:"Woman",Symbol:'👩'},
    {text:"Woman",Symbol:'👩‍🦰'},
    {text:"Person",Symbol:'🧑‍🦰'},
    {text:"Older Person",Symbol:'🧓'},
    {text:"Old Man",Symbol:'👴'},
    {text:"Old Woman",Symbol:'👵'},
    {text:"Person",Symbol:'🙍'},
]

const ListOfEmojis6 = [
    {text:"Person",Symbol:'🙎‍♂️'},
    {text:"Person",Symbol:'🙅‍♂️'},
    {text:"Person",Symbol:'🙎‍♀️'},
    {text:"Woman",Symbol:'🙆‍♀️'},
    {text:"Raising Hand",Symbol:'🙋‍♂️'},
    {text:"Shrugging",Symbol:'🤷‍♀️'},
    {text:"Student",Symbol:'🧑‍🎓'},
    {text:"Student",Symbol:'👨‍🎓'},
    {text:"Student",Symbol:'👩‍🎓'},
    {text:"Teacher",Symbol:'👨‍🏫'},
    {text:"Teacher",Symbol:'👩‍🏫'},
    {text:"Judge",Symbol:'🧑‍⚖️'},
    {text:"Farmer",Symbol:'🧑‍🌾'},
    {text:"Farmer",Symbol:'👩‍🌾'},
    {text:"cook",Symbol:'👨‍🍳'},
    {text:"Mechanic",Symbol:'🧑‍🔧'},
    {text:"Factory",Symbol:'🧑‍🏭'},
    {text:"Office Worker",Symbol:'🧑‍💼'},
    {text:"Technologist",Symbol:'🧑‍💻'},
]

const ListOfEmojis7 =[
    {text:"Artist",Symbol:'🧑‍🎨'},
    {text:"Pilot",Symbol:'👨‍✈️'},
    {text:"Police",Symbol:'👮'},
    {text:"Detective",Symbol:'🕵️'},
    {text:"Guard",Symbol:'💂‍♂️'},
    {text:"Worker",Symbol:'👷'},
    {text:"Santa",Symbol:'🎅'},
    {text:"Fairy",Symbol:'🧚'},
    {text:"Umbrella",Symbol:'☂️'},
    {text:"Footprints",Symbol:'👣'},
    {text:"Luggage",Symbol:'🧳'},
    {text:"Glasses",Symbol:'👓'},
    {text:"Handbag",Symbol:'👜'},
    {text:"Shoe",Symbol:'👟'},
    {text:"Hat",Symbol:'🎩'},
    {text:"Briefcase",Symbol:'💼'},
    {text:"Hat",Symbol:'👒'},
    {text:"Graduation",Symbol:'🎓'},
    {text:"Crown",Symbol:'👑'},
]


class AllSymbols extends Component{
    render(){
        return(
            <div>
                   <table> 
                       <tr>
                         <td>
                        {
                        ListOfEmojis.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis1.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis2.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis3.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis4.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis5.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis6.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                    <td>
                        {
                        ListOfEmojis7.map((item,index)=>{
                           return(
                              
                              <div id={item.text} className={item.text}> 
                                   {item.Symbol}
                                   {item.text}
                              </div>
                            
                           )
                          
                        })
                    }
                    </td>
                   </tr>
                </table>


          
            </div>
        )
    }
}

export default AllSymbols;