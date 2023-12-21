import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect, useState } from 'react';
import { getFromStorage } from '../components/Storage';

const Tab1 = () => {
  const [compras, setCompras] = useState([]);


  useEffect(() => {
    const getCompras = async () => {
      const data = await getFromStorage('compras');
      setCompras(data);
    }

    getCompras();
  })
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Compras</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Alubagre</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Bagrenícius</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Ivankov</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
