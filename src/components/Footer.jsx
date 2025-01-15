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
    <article className={`bg-slate-800 p-10 rounded-3xl flex flex-col items-center w-[22rem] mt-6 absolute left-0 right-0 m-auto ${changeV}`}>
        <i className='bx bx-check bx-tada text-orange-500 text-9xl rounded-full border-4 border-orange-500 mb-6'></i>
        <p>Yor email was delivered successfully!</p>
        <div className='mt-10 mb-2'>
            <button className={buttonStyle} onClick={() => setSuccess(!success)}>Close</button>
        </div>
    </article>

    <div id="FOOTER" className='bg-slate-900 mt-16 md:mt-24 lg:mt-36 pt-10 lg:pt-16 text-gray-200'>
        <h1 className="text-orange-500 text-4xl lg:text-5xl xl:text-6xl ml-10 md:ml-24 lg:ml-56 mb-10 font-bold">Let&apos;s Connect</h1>
        <h2 className="lg:text-lg xl:text-xl ml-10 md:ml-24 lg:ml-56 mb-10 font-semibold mx-3">If you&apos;re looking for a motivated developer with a strong foundation and a hunger to learn, I’d love to hear from you.</h2>
        <section className='text-gray-200 text-lg flex flex-col lg:flex-row lg:justify-around'>
            <div className="mx-10 md:ml-32 mb-16 md:w-2/3 lg:w-1/3 justify-self-center">
                <form onSubmit={onSubmit} className="bg-slate-800 rounded-3xl px-8 pt-6 pb-8 mb-4 w-full justify-self-center">
                    <div className="mb-4">
                        <label className={labelStyle} htmlFor="name">Name</label>
                        <input className={inputStyle} id="name" name="name" type="text" placeholder="Enter Your Name" autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle} htmlFor="email">Email</label>
                        <input className={inputStyle} id="email" name="email" type="email" placeholder="Enter Your Email" autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle} htmlFor="subject">Subject</label>
                        <input className={inputStyle} id="subject" name="subject" type="subject" placeholder="Enter Your Subject"/>
                    </div>
                    <div className="mb-4">
                        <label className={labelStyle} htmlFor="message">Message</label>
                        <textarea className={`${inputStyle} h-[100px]`} id="message" name="message" type="text" placeholder="Enter your Message"></textarea>
                    </div>
                    <div className="mb-4 text-center">
                        <button className={buttonStyle} type="submit">Send Email</button>
                    </div>
                </form>
            </div>

            <div className="mt-16 md:border-2 md:mx-16 md:pr-16 md:mb-16 h-fit">
                <div className="text-md sm:text-2xl md:-mt-12 md:-ml-12 p-10 md:p-12 pb-16 md:mb-16 bg-orange-500 h-fit">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-3 font-bold">Doesn&apos;t like forms?</h2>
                    <p>Feel free to contact me anytime</p><br />
                    <p><i className='bx bxl-gmail' ></i>&emsp; hectorniz.developer@gmail.com</p><br />
                    <p><i className='bx bx-phone' ></i>&emsp; +54 9 11 2255-8118</p>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Footer