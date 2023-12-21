import { IonCard, IonLabel, IonButton, IonList, IonItem, IonInput } from "@ionic/react";
import { useState } from "react";
import './AddCompras.css';

const AddCompras = (props) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

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
          <IonButton onClick={() => props.submit(descricao, valor)} color="success">Adicionar</IonButton>
          <IonButton onClick={() => props.hide()} color="danger">Cancelar</IonButton>
        </IonItem>
      </IonList>
    </IonCard>
  );
}

export default AddCompras;