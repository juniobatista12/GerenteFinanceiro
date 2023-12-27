import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonCol, IonLabel, IonList, IonItem } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import './Categorias.css';
import { useEffect, useState } from 'react';
import AddCategoria from './AddCategoria';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getCategorias = () => {
      const data = localStorage.getItem("categorias");
      if (data){
        setCategorias(JSON.parse(data));
      }
    }

    getCategorias();
  }, [])

  const hideAddForm = () => {
    setShowAddForm(false);
  }

  const handleSubmit = (nomeCategoria) => {
    const tmp = categorias;
    tmp.push(nomeCategoria);
    setCategorias(tmp)
    localStorage.setItem("categorias", JSON.stringify(categorias));
    setShowAddForm(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categorias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Categorias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {categorias.map((categoria, index) =>{
            return (
              <IonItem>
                <IonGrid>
                  <IonCol><IonLabel>{categoria}</IonLabel></IonCol>
                </IonGrid>
              </IonItem>
            )
          })}
        </IonList>
        {showAddForm ? <AddCategoria hide={hideAddForm} submit={handleSubmit} /> : null}
        <IonButton className='addButton' shape='round' onClick={() => setShowAddForm(true)}>
          <IonIcon slot='icon-only' icon={ addOutline } />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Categorias;
