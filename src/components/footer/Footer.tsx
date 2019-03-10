import React, { useState } from 'react';
import { Container } from 'components/container/Container';
import { Email } from 'components/email/email';
import GroundedLogo from 'assets/svg/grounded-workmark.svg';
import { Link } from 'gatsby';

import s from './Footer.scss';

function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

export const Footer = ({ social }: IFooterProps) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleTextChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const f = e.currentTarget;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': f.getAttribute('name'),
        ...form,
      }),
    })
      .then(() => setSent(true))
      .catch(error => alert(error));
    return false;
  };

  return (
    <>
      <div className={s.footer__contact__wrapper}>
        <Container>
          <div className={s.footer__contact}>
            <div className={s.contact__text}>
              <p>Interested in partnering with us?</p>
              <p>Contact us, let us know lorem.</p>
            </div>
            <div className={s.contact__form}>
              {sent ? (
                <>
                  <h3>Thank you</h3>
                  <p>
                    We have received your message and will be in contact as soon
                    as possible
                  </p>
                </>
              ) : (
                <form
                  action="/thankyou"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={handleTextChange} />
                    </label>
                  </p>
                  <p className={s.input__field}>
                    <label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleTextChange}
                      />
                    </label>
                  </p>
                  <p className={s.input__field}>
                    <label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleTextChange}
                      />
                    </label>
                  </p>
                  <p className={s.input__field}>
                    <label>
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        onChange={handleTextChange}
                      />
                    </label>
                  </p>
                  <p className={s.submit}>
                    <button type="submit">Submit</button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className={s.footer}>
        <Container>
          <div className={s.footer__content}>
            <div className={s.footer__content__wrapper}>
              <Link to="/" className={s.footer__logo}>
                <GroundedLogo className={s.footer__logoSvg} />
              </Link>
            </div>

            <ul className={s.footer__list}>
              {social.map(item => (
                <li key={item.to} className={s.footer__item}>
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Email />
        </Container>
      </div>
    </>
  );
};
