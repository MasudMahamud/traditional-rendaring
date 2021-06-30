import React from 'react';
import './User.css';

const User = (props) => {
    const familiar = props.familiar;
   
    return (
        <div>
            <div>
                <h2 className="title" >Greeting</h2>
                { 
                    familiar ? <div className="describe">welcome, my friend.</div>
                    : <div className="describeNegative">Who the hell are you?</div>
                }
            </div>

            <div>
                <h2 className="title" >Food</h2>
               {
                   familiar ? <div className="describe">I will buy Food for you.</div>
                   : <div className="describeNegative">Let's eat his whose?</div>
               }
               
            </div>

            <div>
                <h2 className="title">Connection</h2>
                {
                    familiar ? <div className="describe">Let's join my facebook</div>
                    : <div className="describeNegative">I don't add stranger</div>
                }      
            </div>
        </div>
    );
};

export default User;