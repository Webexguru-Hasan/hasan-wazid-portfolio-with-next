import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Webexguru-Hasan"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hasanwazid/"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/hasan.wazid.7"},
    {icon: <FaTwitter />, path: ""},
]
const Social = ({conatainerStyles, iconStyles}) => {
  return (
    <div className={conatainerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social