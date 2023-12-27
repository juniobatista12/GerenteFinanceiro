import { IonInput, IonList, IonItem, IonCard, IonButton } from '@ionic/react';
import { React, useState } from 'react';

const AddCategoria = (props) => {
    const [nomeCategoria, setNomeCategoria] = useState("");

    return (
        <IonCard className='addCard'>
            <IonList>
                <IonItem>
                    <IonInput label='Nome da Categoria' placeholder='Digite o nome da categoria a ser adicionada' value={nomeCategoria} onIonChange={(e) => setNomeCategoria(e.target.value)} labelPlacement='stacked' />
                </IonItem>
                <IonItem>
                    <IonButton onClick={() => props.submit(nomeCategoria)} color="success">Adicionar</IonButton>
                    <IonButton onClick={() => props.hide()} color="danger">Cancelar</IonButton>
                </IonItem>
            </IonList>
        </IonCard>
    )
}

export default AddCategoria;