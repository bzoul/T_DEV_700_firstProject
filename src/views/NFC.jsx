import React, { useEffect, useState } from 'react';
import NfcCardReader from 'react-native-nfc-card-reader';
import { Text, Button } from 'react-native'

const NFCView = () => {

  const [card, setCard] = useState({})

  const startScan = async () => {
    await NfcCardReader.startNfc((cardDetails) => {
      console.log(cardDetails)
       setCard(cardDetails);
     })
  }

  useEffect(() => {
    startScan();
  }, [])

  return (
    <>
      <Text>{ card.cardType }</Text>
      <Text>{ card.expiryDate }</Text>
      <Text>{ card.cardNumber }</Text>
    </>
  )
}

export default NFCView;