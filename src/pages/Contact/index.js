import React from 'react';

const Contact = () => {

    return (
        <>
            <header>
                <h1 hidden>Contact Me</h1>
                <h5>If you would like to get in touch, please leave a message and I will reply soon!</h5>
            </header>

            <main id="contact">
                <form aria-label="email-form" action="https://formsubmit.co/idontknowwhoamilol@gmail.com" method="POST" name="email-form">
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="New Message!"></input>
                    <input type="hidden" name="_next" value="https://stesfood.netlify.app/thankyou"></input>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" required></input>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required></input>
                    <label htmlFor="message">Message:  </label>
                    <textarea rows="3" id="message" name="message"></textarea>
                    <input type="submit" value="submit"></input>
                </form>
            </main>
        </>
    )
}

export default Contact;