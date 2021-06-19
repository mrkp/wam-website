import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'


export default function Home() {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
            setSuccess(true);
        }
        const script = document.createElement('script');

        script.src = "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

  return (
    <div className="container">
        <Head>
            <title>WAM!</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>
        </Head>
        <Header/>

      <main>
          <img src="/wam-text-logo.svg" alt="" className="main-logo"/>
          <div style={{width: '100%'}}>
              {success && (
                  <p style={{ color: 'green'}}>
                      Successfully submitted form!
                  </p>
              )}
              <div id="mc_embed_signup">
                  <div className={styles.grid}>
                      <div className={styles.card}>
                          <form
                              action={`${process.env.MAILCHIMP_ACTION}`}
                              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                              target="_blank" noValidate data-netlify="true">
                              <div id="mc_embed_signup_scroll">
                                  <h2>Subscribe</h2>
                                  <div className="indicates-required">
                                      <span className="asterisk">*</span> indicates required
                                  </div>
                                  <div className="mc-field-group">
                                      <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
                                      </label>
                                      <input onChange={e => setEmail(e.target.value)} type="email" value={email} name="EMAIL" className="required email" id="mce-EMAIL"/>
                                  </div>
                                  <div className="mc-field-group">
                                      <label htmlFor="mce-FNAME">First Name </label>
                                      <input onChange={e => setFName(e.target.value)} type="text" value={fName} name="FNAME" className="" id="mce-FNAME"/>
                                  </div>
                                  <div className="mc-field-group">
                                      <label htmlFor="mce-LNAME">Last Name </label>
                                      <input onChange={e => setLName(e.target.value)} type="text" value={lName} name="LNAME" className="" id="mce-LNAME"/>
                                  </div>
                                  <div className="mc-field-group">
                                      <label htmlFor="mce-COUNTRY">Country </label>
                                      <input onChange={e => setCountry(e.target.value)} type="text" value={country} name="COUNTRY" className="" id="mce-COUNTRY"/>
                                  </div>
                                  <div id="mce-responses" className="clear">
                                      <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                      <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                  </div>
                                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                      <input onChange={console.log}
                                             type="text"
                                             name="b_906815c8ca38b981f6026b1db_7ab0035050"
                                             tabIndex="-1" value=""/>
                                  </div>
                                  <div className="clear">
                                      <input onChange={console.log} type="submit" value="Subscribe" name="subscribe"
                                             id="mc-embedded-subscribe" className="button" style={{backgroundColor: 'yellow', color: 'black'}}/>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>

          </div>
      </main>
      <Footer />
    </div>
  )
}
