import { IonCard, IonLabel, IonButton } from "@ionic/react";

const AddCompras = (props) => {
  return (
    <IonCard>
      <IonLabel>Teste</IonLabel>
      <IonButton onClick={() => props.hide()}>Cancelar</IonButton>
    </IonCard>
  );
}

export default AddCompras;