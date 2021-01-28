import './PayList.css';
import PayItem from '../pay-item/PayItem';

function PayList({payItems}) {
  return (
    <div className="pay-list">
        {payItems.map(payItem => <PayItem {...payItem} />)}
    </div>
  );
}

export default PayList;