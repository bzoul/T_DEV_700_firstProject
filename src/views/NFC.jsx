import React, { useEffect, useState } from 'react';
import NfcCardReader from 'react-native-nfc-card-reader';
import { Text, Button } from 'react-native'
import { useSelector } from 'react-redux';

const NFCView = () => {

  const [card, setCard] = useState({})
  const total = useSelector(state => state.cart.total);

  const startScan = async () => {
    await NfcCardReader.startNfc((cardDetails) => {
      setCard(cardDetails);
      // Api call to make payment
     })
  }

  useEffect(() => {
    startScan();
  }, [])

  return (
    <>
      <Text>Payment successfully done with total { total }</Text>
      <Text>{ card.cardType }</Text>
      <Text>{ card.expiryDate }</Text>
      <Text>{ card.cardNumber ? card.cardNumber.substring(0, 4) : '****' } **** **** ****</Text>
    </>
  )
}

export default NFCView;