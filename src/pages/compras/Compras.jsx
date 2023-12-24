import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonButton, IonFooter, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ExploreContainer from '../../components/ExploreContainer';
import './Compras.css';
import React, { useEffect, useState } from 'react';
import AddCompras from './AddCompras';

const Compras = () => {
  const [compras, setCompras] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getCompras = () => {
      var data = localStorage.getItem('compras')
      if(data){
        setCompras(JSON.parse(data));
      }
    }

    getCompras();
  })

  const hideAddForm = () => {
    setShowAddForm(false);
  }

  const handleSubmit = (descricao, valor) => {
    const tmp = compras;
    tmp.push({'descricao': descricao, 'valor': valor});
    setCompras(tmp);
    setShowAddForm(false);
    localStorage.setItem('compras', JSON.stringify(compras));
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
          {compras.map((compra, index) => {
            return (
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol><IonLabel>{index+1}</IonLabel></IonCol>
                    <IonCol size='9'><IonLabel>{compra.descricao}</IonLabel></IonCol>
                    <IonCol><IonLabel>{compra.valor}</IonLabel></IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            )
          })}
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
