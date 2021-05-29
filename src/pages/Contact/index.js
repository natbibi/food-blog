import React from 'react';

const Contact = () => {

    return (
        <>
            <header>
                <h1>Contact Me</h1>
            </header>

            <main id="contact">
                <form action="https://formsubmit.co/your@email.com" method="POST" name="email-form">
                <p>If you would like to get in touch, please leave a message and I will reply soon!</p>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="New Message!"></input>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" required></input>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required></input>
                    <label htmlFor="message">Message:  </label>
                    <textarea rows="4" id="message" name="message"></textarea>
                    <input type="submit" value="submit"></input>
                </form>
            </main>
        </>
    )
}

export default Contact;