import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
/** Babel is compiler which converts modern 
 javascript code into browser understandble code 
var React = require('react')
var ReactDOM = require('react-dom') this traditional JS code for using react
---------------------------------------------------
*/


// ReactDOM.render(
//           "Kya dikhana hai", 
//           "Kahan dikhana hai", 
//           "callback function"
//           );

/*
ReactDOM.render(
  <h1>Hello World</h1>, //<-  this html expression is called Jsx expression
  document.getElementById("root")
  );
*/

/**above code convrted by babel as:
  import { jsx as _jsx } from "react/jsx-runtime";
  ReactDOM.render( /_jsx("h1", {
  children: "Hello World"
}),
document.getElementById("root")
);*/
//----------------------------------------------------------


//array or div for multiple jsx element
// ReactDOM.render(
//   [
//     <h1>Hello World</h1>,
//     <p>Ujala maurya first react application</p>
//   ],
//   document.getElementById("root")
//   );
// ----------------------------------------------------------

//<React.Fragment> or <></>(sugar coated) is used to remove one extra div inserted
const ujala_name = "Ujala Maurya";
var currentDate = new Date().toLocaleDateString();
var currentTime = new Date().toLocaleTimeString();
const img1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAtAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAMEBQYBB//EADoQAAIBAwIDBgIIBgEFAAAAAAECAwAEEQUhEjFBBhMiUWFxgZEUMlKhscHR8AcVIzNC0vEkQ3OC4f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAAICAwEAAgMBAAAAAAAAAAABAhEDEiExMkETIoEE/9oADAMBAAIRAxEAPwDzlKlRgEVCVqfSQYrtietFhkrx4NKYjHKo7th66752pmw7D8OG2rsoFMRHBzRySZrPw18GmxTYArsjUzxYNTZJseMYG9FGVPhIoojxDehdfEDRSGS+wkiGTQTRAHNTIUyBUldPnujw28TyN6DYe56UdeDuHLKyEYp9gSOVPx2M4u1tpInSV2ChXUjn19vWtZL2MlFqWhuA8g5KVwDisomTS4zBOpzQFK1+ldkZb+2a4upWthxEBOHxbHBzn943py27DXc97OhnRLaP6sp3L/Dp7/sb8UmTdGJKUu7wK0OvdnLrRmQzMskTkhZE5ZHQ+v76VUFNqRwadM2pD4Kdji2zRcPiqQoHBWSCokGZNqiOuTU6fmajY3oNE5oZEVKpAWlW1E1HBJg04JCDUQEZo+OimMpD5OTTiioyvvTwfamTGTHOVAW3pceRQZyaIWzjNnNNE706Vpo86RiMkQyYxTznOCKhoDmpC8qZMeL4WOnpLcyiK3jaSTGeFRXpnY20eDRLhLiBo5e+PEHTcjAx8KyP8P2jZrtMDvsqQfNfL7vvFb1ge44ozgj4fCnTDKTcdSsvIIHu42ZULRtxITzH7zVlcSGO3d134JD8c/8ANZ2+meOQOSSEfJP41enMsDkb8aI49cbH8qq2iIV2e6s5yoxwxDHxP6Cq6a/e2dWBwsh4T86n6wGFpcLuCQijHkKzWtswggRN2Z8D5tR3aQ68LLtGg1Ls4I14e9eUOmeh4v8AUms5a9n7cqwfL48LP6+QHn86uUillaO34ipSLMj4/tR/7Gp2nJHLNxhQttb+FFHU+fw8/OtSm7YduHm+r2B07UJbVjxFMHPuAfzqOmTtXoGo9mrTUby4vpriUByDlSFRAAANyPSsfeae9heyW8vNcEZ54PKpSg4jxd8K6aE4yar3GCaurnHd7VUTjBNSkhcioa4xSpo86VCyWwKk0eaaFFmlJ2PBqNW251FLV0PRsZSJfHRo29RA9Oq9axlIkORiozNhq677UwzZot2aUrJke4Fajs52Q1DXou/ieOG3zgSPvk+grKW7bYr2T+HmowT9n4YICEltxwSKep8/jT40mFSaXCrs+wt7otyl3DqUUvDs6dzwhgemeI1oFkMiHrJyKn/IfrUvUL7g8M0ZI67ZqldgGaSyZXH+UPFz9j0NVcaCm2DIkc7eMBlbZh6fqKstJiaO2a3Y5aEYB+0h5H8PiDVcs8c7F08Ey44kYAE9dx0P3Gu3msJYxpOuCUyjjzU/mDg+3FU26A1Zd6rErW5I+q3AR7VQSW6m4ilkXiW1jAC/bkbp+/tU6naO2vLZFLAbgHfpkn9K5ot2t4TO/EArEgdeI7fMDC/Ammi7YGmkSPoPdW3BK5IZ+KZ0GWnk+yvoOVEwSNEM4CJyht498n8z6napzF3lEcESyz44Qo+rGPI/p8/Kot7NY6KTLqEv0i9cbQLhnb3HQenKq3QEwpWS3tG1HVWEVvF4kiBJA/2Oa8t1O/e/1Ce6kHC0jZAznhHID4ACtXqSah2hmWS8gmSBd44V2Uep251Dl7MQxx5aN0/9zn76E9peFYNIycrk1CnGTVzq2mtYSquSysMgnmKq3XY1zS5xjPqIBXelTzczXKQjRAzRZpoGu8VJZCwmNAG3rjNTYbetYLJQai4zUcGizRsKkOmQmhDb02TSU1rNsXnZiGO61q2hnj7yEtl18wB19K9ntomkiUW0KRIn1OHIwPToK8R7Pagml6rBdyKWVDg45geYr2HSdbF9bia1vDJHjctlgPfG4+IroxS4Wh0k3Ju49jgr5HB/GoRZWfimgi4vtIwBp+71C7we7u7fH/mIqANRvM73dsPeTP5U7kW1o5qSQPbd4jOGUeFiMEezflWUguXvLub6XLG1taqGcspJck4VCo5538tgR5Z0t5fd8rRmSJ5jnKQxcbH8Ky7o8IuoGt24rop3Phzhg3LIPhBBPL41y/6NteE5+cJMV8Iu6M1hp8gRMOkcHAzqSAWBDHBznxU7oF2trcpGnfSQSgtDhgvDucgsTtjHPmegqsSGecyiKCSSW3LCQZx3R5HiOcb7j4+lT+zlrcyaoj28HeiAGN3Z8F3z4ipA3GeX/wBqWFJZVp/SEHJ+nptm7PahFJRMf27NSM+8hxn4YrkdvBalmgtLOBmOWeV+Jz6tjmfc0xB3Zj/6uG8TA8RVy4H5/dTMv8kJPHdEejqQfvFekkh1VkuS8RPrXkA9I4dvvNRpr6KZTGGMpO3CIAc/fVfcXugWql+/RgoyccTn5KKzmqdtIu4aLSYDv/3XUKvwUc/j8qaWRRKIq+2d44uxY4iWOHxAJg8/P99ay7y5FK7lkmlaSVizscsx5k1FdsVwyls7M50GTvzpVGL712hZPYjgUiKMUJpSTG2psCnWpsUBRxaIChWnBRGQJrqCixRBcCtQaODnWq7C9nr3X9TCW072sMQBmulOCg8gfM1lgK9V/hdfW9vpPdrjjErd6Mbljy267Y+VUxxtjxNTqWhpHaJFAzsiqAbidizN7Z3NU9r2bSVg11NK0ZOApJy3sK10ha7/AKkq4iXkhbdj6+QqrvLyOE5cFy54UjUby+mOi/jXVFKulU2/RyC0s7K3WOCBURzhY0Xdz5evudh0qs1fR11C5i08AB3AluCOSoDso9z164PpUmS9Sxiku71g8w8JCnlnlGnqfPpU3QIpEtbi8uuE3M54nx/jywo9BsPhWa+hXwztv2GF5bo93NM/EnAisxIjBBKjn0LVoOzVjHFY92sX9aHZ1B35kZz57EfD1q5muPo9qxGMrhtuvWqTVbt9K1oyWwyGXj4PtAbMPlwn3pIxUfiqF6XTyRyRjvBxDkGGxFUOqcVvmSRBNb8+8C+JPfzHrU+S6iu4FvbF+NXGWUdf0NVLXwZsNy/f31ZJUPFWRFW1lwVVWHnWf7U6DDHbG9s1CFf7qDkR546VYajNa2ModwqQO2ONW4cH8Krda160fTWtra4Mry7HABCjrk1HI0yySXpiLpeHNV8nOrO63zVZLzNc7RzT9GaVdpUpMR2oCaN6aNABxqADejNAOdAUcFGKbFEprBHV50eKBKOmQ6BqTZ311Yvx2k7xN14Tz9+lRzTfFvWBdHvGj6p3/Z6yaORbiTuVDHOF48bliPXO3mKrLq/hsmaWeYvcOMkj+4w8kX/EeteU2uoXltFwW15cwoTkrFMygnzwDVz2PIuNcxMxdzC3CzHJJyOvzrojkukVjM2unRz6jdfzC+QJbWwxbwDcBj19T61rJrtLWG3gY+OeQRKPPGSx+YPzFQ7eBmeFFXghjw5J6npWVv8AWTf9qIGtyTa22Y4z5+bfE4+Aq8v0SQ+tm+1WYG0ffYgAis72onZntJ05oVPwZd/wqTqeoKbZhnou/nWf1y+H0i1iLgNt4SeeFA/OhkaigpcJVvLcafcyfR8tFKO8CZ2PmPfH4UFxqEN0SYXUTYy0ZOGGfMfnTxYRxRsvNN09vKsT24RYNThkiJBeLYg9ATj8aWcmkD49J3aa/T+WPbykiWQjhB57MCT8qy6SVDeVmOXYk+pzXVkrmcrYkp2yXK4K1XyczTsj7c6js29K2I2KlQ8VKgKJqbNOGgoCgGuV01ygAIUQoRyohRCOJzp2mVoy2BRQUxOaYY70TvTOcmg2BskK9SLW7mtZ0nt34JUOVbyqEDRcVZM1mruO22rXVtHbSvGkIx3vdrhpR1BPQH0qY2s6ba2jzW0iyTMMJGAc59fIcqxQNLiNP+SX2UWRo31p2rs7i0jW9YxzbBwFODjqMD7qpL/VTqF1NOuyY4UB54rOcVSrVv6clJmm5R6Z5G1RpdN7WtHbiK/VpCo8Mq8z7iqXW9VbVLwTsnAqoERc5wP2aq2Ygmh4iaZzbVMDm2qHGakHpomuZpbFseZ6bJ3oc0s1jWLNdrldogDNAaVKgYE0IpUqwoQoxSpVgoIUmO1KlWCMPQrSpUorCro50qVYwWaQNKlRCdzT9qwAb1rtKln4EYc+I+9DmlSpkA4TQk0qVAwhXc0qVEwVKlSpgn//2Q==";
const heading={
  color
}

ReactDOM.render(
  <>
    {/* <h1 contentEditable="true">Hello World</h1>
    <p>{ujala_name} you are learning react app</p>
    <p>{`Current date is ${currentDate}`}</p>
    <p>{`Current time is ${currentTime}`}</p> */}
    
    <h1 className="heading" >My Image Gallery</h1>
    <div className="div-img">
      <img src={img1} alt="flower1 image"/>
      <img src={img1} alt="flower2 image"/>
      <img src={img1} alt="flower3 image"/>
    </div>
  </>,
  document.getElementById("root")
  );