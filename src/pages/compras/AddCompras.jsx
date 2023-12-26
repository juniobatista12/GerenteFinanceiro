import { IonCard, IonLabel, IonButton, IonList, IonItem, IonInput, IonDatetime, IonDatetimeButton, IonCheckbox } from "@ionic/react";
import { useState } from "react";
import './AddCompras.css';

const AddCompras = (props) => {
  const handleDateNow = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return year + '-' + month + '-' + day;
  }
  
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [hoje, setHoje] = useState(true);
  const [data, setData] = useState(handleDateNow());

  return (
    <IonCard className='addCard'>
      <IonList>
        <IonItem>
          <IonInput label="Descrição" placeholder="Insira a descrição da compra" value={descricao} onIonInput={(e) => setDescricao(e.target.value)} labelPlacement="floating" />
        </IonItem>
        <IonItem>
          <IonInput label="Valor" placeholder="Insira o valor da compra (R$)" value={valor} onIonInput={(e) => setValor(e.target.value)} labelPlacement="floating" />
        </IonItem>
        <IonItem>
          <IonCheckbox checked={hoje} onClick={() => setHoje(!hoje)}>A compra foi realizada hoje?</IonCheckbox>
        </IonItem>
        {!hoje &&
          <IonItem>
            <IonDatetime value={data} onIonChange={(e) => setData(e.target.value.split('T')[0])} presentation="date" />
          </IonItem>
        }
        <IonItem>
          <IonButton onClick={() => props.submit(descricao, valor, hoje ? handleDateNow() : data)} color="success">Adicionar</IonButton>
          <IonButton onClick={() => props.hide()} color="danger">Cancelar</IonButton>
        </IonItem>
      </IonList>
    </IonCard>
  );
}

export default AddCompras;