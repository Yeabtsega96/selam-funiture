import "./Logo.css"

const Logo = ({bg = "white"}) => {
  return (
    <div className='logo'>
      <span>S</span>
      <div>
        <p className={`selam ${bg}`}>Selam</p>
        <p className="furniture">Furniture</p>
      </div>
    </div>
  )
}

export default Logo