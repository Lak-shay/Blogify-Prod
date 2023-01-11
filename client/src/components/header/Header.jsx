import "./header.css"
// We are only going to use the header component in the home page

export default function Header() {
  return (
    <div className="header">
        <div className="headerHeadings">
            <span className="headerTitleSm">Stay Calm and use</span>
            <span className="headerTitleLg"><span className="bigHeadingFirstLetter">B</span>LOGIFY</span>
        </div>
    </div>
  )
}
