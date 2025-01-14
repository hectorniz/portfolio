import { useState } from "react";

const Footer = () => {
    const inputStyle = "border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border hover:border-orange-500 focus:outline-orange-500"
    const buttonStyle = "bg-orange-500 text-gray-200 font-bold py-2 px-16 rounded-full text-center mt-6 hover:bg-orange-600 hover:-mb-2 hover:py-3 hover:px-18 text-md hover:text-xl transition-all"
    const labelStyle = "block text-gray-400 text-sm font-bold mb-2"

    const [success, setSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "031022f6-3ecc-4fdd-a697-55cbf2c8af85");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setSuccess(!success)
        }
    };
    
    const changeV = success ? "block" : "hidden"; 

    return (
    <>
    <div id="FOOTER" className='bg-slate-900 mt-16 md:mt-24 lg:mt-36 pt-10 lg:pt-16 w-full'>
        <article className={`bg-slate-800 p-10 rounded-3xl flex flex-col items-center m-2 w-[22rem] mt-6 ${changeV}`}>
            <i className='bx bx-check bx-tada'></i>
            <p>Yor email was delivered successfully!</p>
            <div className='mt-10 mb-2'>
                <button className={buttonStyle} onClick={() => setSuccess(!success)}>Close</button>
            </div>
        </article>

        <h1 className="text-gray-200 text-4xl lg:text-7xl pl-5 lg:pl-24 pb-10 lg:pb-14 font-bold">Get in Touch!</h1>
        <section className='text-gray-200 text-lg flex flex-col items-center w-full'>
            <div className="w-full max-w-xs">
                <form onSubmit={onSubmit} className="bg-slate-800 rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className={labelStyle}>Name</label>
                        <input className={inputStyle} name="name" type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle}>Email</label>
                        <input className={inputStyle} name="email" type="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle}>Subject</label>
                        <input className={inputStyle} name="subject" type="subject" placeholder="Enter Your Subject"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle}>Message</label>
                        <textarea className={`${inputStyle} h-[240px]`} name="message" type="message" placeholder="Enter your Message"></textarea>
                    </div>
                    <div className="mb-4 text-center">
                        <button className={buttonStyle} type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </section>
      </div>
    </>
  )
}

export default Footer