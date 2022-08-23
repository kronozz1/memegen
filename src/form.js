import React from 'react'
export default function Form(){
  const [meme , memefunc] = React.useState({
    topText: '',
    bottomText: '',
    randomImg:'https://i.imgflip.com/1o00in.jpg'
  })
    const [allmemeImg , funcmemeImg]=React.useState({})
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(resp => resp.json()).then(data => funcmemeImg(data))
  },[])
  function GetMemeImg(){
    const array=allmemeImg.data.memes 
    const randomNum= Math.floor(Math.random()*array.length)
     const url = array[randomNum].url
      memefunc(prevmemefuc => {
        return {
          ...prevmemefuc,
          randomImg:url


        }

      })
  }
    function handleChange(event){
         const {name , value}=event.target
        memefunc(prevmemefuc =>{
        return {
          ...prevmemefuc,
          [name]: value
        }
      })
    }


return (
    <div className="form">
      <input type="text" id='toptext' className="form-control" onChange={handleChange} name="topText" placeholder="Top Text"/>
        <input type="text" className="form-control" id='bottomtext' onChange={handleChange} name="bottomText"  placeholder="Bottom Text"/>
      <br/>
  <button type="button" onClick={GetMemeImg} className="btn btn-primary submit">Get a new meme image  🖼</button>
  <br/>
  <div>
    <h2 className="toptext">
      {meme.topText}
  </h2>
    <img src={meme.randomImg} className='getMeme' />
      <h2 className="bottomtext">
      {meme.bottomText}
  </h2>

  </div>
  </div>
)
}
