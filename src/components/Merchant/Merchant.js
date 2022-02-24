import './Merchant.css'

export default function Merchant({ merchant }) {
  const { name, thumbnail, email } = merchant

  return (
    <div className='merchant'>
      <div className='merchant-info'>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
      <div className='merchant-img-container'>
        <img src={thumbnail} alt={name} />
      </div>
    </div>
  )
}
