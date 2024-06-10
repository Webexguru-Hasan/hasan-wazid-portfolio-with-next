import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hasanwazid/"},
    {icon: <FaFacebook />, path: ""},
    {icon: <FaTwitter />, path: ""},
]
const Social = ({conatainerStyles, iconStyles}) => {
  return (
    <div className={conatainerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social