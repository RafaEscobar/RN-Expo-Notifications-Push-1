import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import { useNotification } from './src/hooks/useNotification';

async function sendPushNotification(expoPushToken:any) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Este seria el saludo',
    body: 'Este seria el cuerpo de la notificación',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export default function App() {
  const expoPushToken = useNotification();
  console.log(expoPushToken);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}
