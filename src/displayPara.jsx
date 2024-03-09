import React, { useState } from 'react';
import './displayPara.css'
import Paragraph from './para';
import ParaData from './paragraphData.json'

function DisplayPara(){

   
    const [data , setData] = useState([]);
   
    const clickHandler = () =>{
        const paragraphCount = document.getElementById("para").value;
        console.log(paragraphCount);
        const newData = ParaData.para.slice(0,paragraphCount);
        setData(()=>{
            return newData;
        });
        console.log(newData);
        console.log(data)
    }
     
    
    

    return(
        <>
            <div className='diaplayMianContainer'>

                <section>
                    <div  className='topContainer'>
                        <h3 style={{
                            fontSize : "50px",
                            color :"white"
                        }}>TIRED OF BORING LOREM IPSUM?</h3>
                        <div className='inputBox'>
                            <label style={{
                            fontSize : "50px",
                            color :"white"
                        }}>Paragraph : </label>
                             <input type='number' id = "para"/>
                            <button type='submit' onClick={clickHandler}>GENETARE</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='middleContainer'>
                        {
                            data.map((para , index) =>{
                            return  <Paragraph para = {para.para} key = {index} />
                            })
                        }
                    </div>
                </section>

            </div>
        </>
    );
}
export  default DisplayPara;