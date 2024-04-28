import React, { useEffect, useRef, useState } from "react";

const OtpLogin = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);
  useEffect(()=>{
    inputRef.current[0].focus()
    
  }, [])
  const handleChange = (e, index) => {
    const value = e.target.value;
    console.log(value, )
   

      

    if (value && index < otp.length - 1) {
      inputRef.current[index+1].focus()
    }
  };

  const handleBackSpace = (e, index)=>{
    console.log(index,"index")
    if (e.target.value && index >=0) {
      inputRef.current[index - 1].focus();
     }


  }

  return (
    <div>
      {otp.map((digit, index) => {
        return (
          <input
            type="text"
            ref={(ref) => (inputRef.current[index] = ref)}
            id={index}
            onKeyDown={(e) => handleBackSpace(e, index)}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpLogin;
