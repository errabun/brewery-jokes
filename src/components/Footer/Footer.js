import './Footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {

  return (
    <footer className='footer-container'>
      <FaGithub />
      <a href="https://github.com/errabun" className='gh-link'>Eric Rabun</a>
    </footer>
  )
}

export default Footer
