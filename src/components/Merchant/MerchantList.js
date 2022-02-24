import { useMerchantContext } from '../../context/merchants_context'
import Loading from '../UI/Loading'
import Merchant from './Merchant'

import './MerchantList.css'

export default function MerchantList() {
  const { merchants, merchants_loading, merchants_error } =
    useMerchantContext()

  if (merchants_loading) return <Loading />
  if (merchants_error) return <h1>Error...</h1>

  return (
    <div className='merchant-list'>
      {merchants &&
        merchants.map(merchant => {
          return <Merchant merchant={merchant} key={merchant.uuid} />
        })}
    </div>
  )
}
