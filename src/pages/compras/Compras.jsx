import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonButton, IonFooter, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ExploreContainer from '../../components/ExploreContainer';
import './Compras.css';
import { useEffect, useState } from 'react';
import { getFromStorage } from '../../components/Storage';
import AddCompras from './AddCompras';

const Compras = () => {
  const [compras, setCompras] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getCompras = async () => {
      const data = await getFromStorage('compras');
      setCompras(data);
    }

    getCompras();
  })

  const hideAddForm = () => {
    setShowAddForm(false);
  }

  const handleSubmit = (descricao, valor) => {
    console.log(descricao)
    console.log(valor)
  }
  
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
        {showAddForm ? <AddCompras hide={hideAddForm} submit={handleSubmit} /> : null}
        <IonButton className='addButton' shape='round' onClick={() => setShowAddForm(true)}>
          <IonIcon slot='icon-only' icon={ addOutline } />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Compras;
