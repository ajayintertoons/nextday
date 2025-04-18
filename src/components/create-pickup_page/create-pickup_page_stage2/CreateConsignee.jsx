
// this modal is for creating and updating consignee details.

import React,{useContext} from 'react';
import { myContext } from '../../../utils/context_api/context';
import CreateModal from './CreateModal';

const CreateConsignee = ({fetchAddressList}) => {
    const { consigneeModalOpen, setConsigneeModalOpen } = useContext(myContext);
  return (
    <CreateModal
    heading="Consignee Details"
    isOpen={consigneeModalOpen}
    onClose={setConsigneeModalOpen}
    fetchAddressList={fetchAddressList}
  />
  )
}

export default CreateConsignee